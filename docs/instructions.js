const instructionStates = new WeakMap();

function clearInstructionInput(game) {
  const input = game.getInputManager();
  for (const id of [...input.getAllTouchIdentifiers()]) {
    if (id !== gdjs.InputManager.MOUSE_TOUCH_ID) input.onTouchCancel(id - 2);
  }
  input.onMouseButtonReleased(gdjs.InputManager.MOUSE_LEFT_BUTTON);
  input.onFrameEnded();
}

function addInstructionsButton(game) {
  window.installGameSoundControls(game);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'instructions-help';
  button.setAttribute('aria-label', 'เปิดวิธีเล่น');
  button.title = 'วิธีเล่น';
  button.innerHTML = '<img src="assets/icons/information.png" alt="" draggable="false">';
  document.body.append(button);
  // Keep help-button gestures out of the game's mouse/touch handlers.
  for (const event of ['pointerdown', 'pointerup', 'touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup']) {
    button.addEventListener(event, e => e.stopPropagation());
  }
  button.addEventListener('click', event => {
    event.stopPropagation();
    window.showGameInstructions(game);
  });
  const position = () => {
    const scene = game.getSceneStack().getCurrentScene();
    const zoom = scene?.getObjects('ZoomIn')[0];
    const canvas = document.querySelector('canvas');
    if (!zoom || !canvas) return;
    const bounds = canvas.getBoundingClientRect();
    const layer = scene.getLayer(zoom.getLayer());
    const point = layer.convertInverseCoords(zoom.getX() - 40, zoom.getY() + 7);
    const scaleX = bounds.width / game.getGameResolutionWidth();
    const scaleY = bounds.height / game.getGameResolutionHeight();
    Object.assign(button.style, {
      left: `${bounds.left + point[0] * scaleX}px`,
      top: `${bounds.top + point[1] * scaleY}px`,
      width: `${44 * scaleX}px`, height: `${44 * scaleY}px`
    });
  };
  gdjs.registerRuntimeScenePostEventsCallback(position);
  window.addEventListener('resize', position);
  const canvas = document.querySelector('canvas');
  if (canvas) new ResizeObserver(position).observe(canvas);
  position();
}

window.showGameInstructions = function(game) {
  let state = instructionStates.get(game);
  if (!state) {
    state = { loaded: false, inputBound: false, dialog: null };
    instructionStates.set(game, state);
  }
  if (state.dialog) return;
  const reopening = state.loaded;
  const wasPaused = game.isPaused();
  if (reopening) {
    game.pause(true);
    clearInstructionInput(game);
  }
  const iconFiles = {
    rotate: 'rotate-smartphone.png',
    zoom: 'zoom-out.png',
    drag: 'down.png',
    tap: 'tap.png',
    sound: 'sound-on.png',
    secret: 'question-sign.png',
    click_zoom: 'click-zoom.png',
    reset: 'reset.png'
  };
  const icon = name => `<img src="assets/icons/${iconFiles[name]}" width="54" height="54" alt="" aria-hidden="true">`;
  const dialog = document.createElement('dialog');
  state.dialog = dialog;
  dialog.className = 'instructions';
  dialog.setAttribute('aria-labelledby', 'instructions-title');
  dialog.innerHTML = `
    <div class="instruction-content">
    <h1 id="instructions-title">วิธีเล่น</h1>
    <p class="intro">ช่วยจอมเวทตามหาคุณอัศวินที่ซ่อนอยู่ในภาพ!</p>
    <div class="instruction-steps">
      <section class="instruction-step"><div class="instruction-icon">${icon('rotate')}</div><h2>หมุนจอเป็นแนวนอน</h2><p>สำหรับมือถือและแท็ปเล็ต</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('zoom')}</div><h2>ถ่างนิ้วเพื่อซูม</h2><p>ถ่างสองนิ้วเพื่อซูมเข้า<br>หุบนิ้วเพื่อซูมออก<br>สำหรับมือถือและแท็ปเล็ต</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('click_zoom')}</div><h2>กดปุ่มเพื่อซูม</h2><p>กด + เพื่อซูมเข้า และ - เพื่อซูมออก<br>สำหรับคอมพิวเตอร์</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('reset')}</div><h2>รีเซ็ตหน้าจอ</h2><p>กดปุ่มรีเซ็ตเพื่อกลับมาสู่มุมมองหน้าจอตั้งต้น</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('drag')}</div><h2>ลากเพื่อเลื่อนดูภาพ</h2><p>ใช้หนึ่งนิ้วหรือกดค้างแล้วลากเพื่อเลื่อนดูภาพ</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('tap')}</div><h2>แตะเพื่อระบุตำแหน่ง</h2><p>แตะหรือคลิกบนภาพ<br>ตรงบริเวณที่พบ</p></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('sound')}</div><h2>เปิดเสียง<br>เพื่อประสบการณ์ที่ดีที่สุด</h2></section>
      <section class="instruction-step"><div class="instruction-icon">${icon('secret')}</div><h2>ดูเหมือนว่า<br>จะมีซีเคร็ตซ่อนอยู่ด้วย...?</h2></section>
    </div>
    <p></p>
    <button class="start" type="button" disabled>กำลังโหลด…</button>
    </div>`;
  document.body.append(dialog);
  // Let the browser zoom the instructions without the game's touch handlers
  // consuming the gesture. Do not prevent the browser's default pinch action.
  for (const event of ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel']) {
    dialog.addEventListener(event, e => e.stopPropagation());
  }
  dialog.addEventListener('cancel', event => event.preventDefault());
  dialog.showModal();
  const content = dialog.querySelector('.instruction-content');
  // Measure the complete layout, then fit it into the visible viewport. Keep
  // the button and every instruction visible rather than clipping overflow.
  const fitDialog = () => {
    const viewport = window.visualViewport;
    // Pinch zoom shrinks the visual viewport, not the layout. Keep the existing
    // panel dimensions so fitting does not cancel out the user's zoom.
    if (viewport && Math.abs(viewport.scale - 1) > 0.01) return;
    const availableWidth = Math.max(1, (viewport?.width ?? window.innerWidth) - 24);
    const availableHeight = Math.max(1, (viewport?.height ?? window.innerHeight) - 24);
    const width = Math.min(940, availableWidth - 2);
    content.style.width = `${width}px`;
    const height = Math.ceil(content.getBoundingClientRect().height /
      (Number(content.dataset.scale) || 1));
    const scale = Math.min(1, (availableHeight - 4) / height);
    content.dataset.scale = String(scale);
    content.style.transform = `scale(${scale})`;
    dialog.style.width = `${Math.ceil(width * scale) + 2}px`;
    dialog.style.height = `${Math.ceil(height * scale) + 2}px`;
  };
  fitDialog();
  const layoutObserver = new ResizeObserver(fitDialog);
  layoutObserver.observe(content);
  window.addEventListener('resize', fitDialog);
  window.visualViewport?.addEventListener('resize', fitDialog);
  document.fonts.ready.then(() => { if (dialog.isConnected) fitDialog(); });
  const start = dialog.querySelector('.start');
  const ready = () => {
    start.disabled = false;
    start.textContent = reopening ? 'กลับไปเล่นต่อ' : 'เริ่มเกม';
    fitDialog();
    start.focus({ preventScroll: true });
  };
  if (reopening) ready();
  else game.loadAllAssets(() => {
    game.pause(true);
    game.startGameLoop();
    state.loaded = true;
    addInstructionsButton(game);
    ready();
  });
  start.addEventListener('click', () => {
    if (start.disabled) return;
    dialog.close();
    layoutObserver.disconnect();
    window.removeEventListener('resize', fitDialog);
    window.visualViewport?.removeEventListener('resize', fitDialog);
    dialog.remove();
    state.dialog = null;
    // Attach input after dismissal so the opening tap cannot select an object.
    if (!state.inputBound) {
      game.getRenderer().bindStandardEvents(game.getInputManager(), window, document);
      state.inputBound = true;
    }
    clearInstructionInput(game);
    if (!reopening) {
      // Start audio inside the button's user gesture so mobile browsers allow
      // playback, rather than waiting for a later tap on the game canvas.
      const sound = game.getSoundManager();
      sound.resumeAllActiveSounds();
      sound.setGlobalVolume(100);
      Howler.mute(false);
      sound.playMusicOnChannel('Barroom Ballet.aac', 1, true, 30, 1);
      const scene = game.getSceneStack().getCurrentScene();
      scene.getVariables().getFromIndex(1).setNumber(1);
      scene.getVariables().getFromIndex(2).setNumber(1);
    }
    game.pause(reopening ? wasPaused : false);
    if (reopening) {
      document.querySelector('.instructions-help')?.focus({ preventScroll: true });
    }
  }, { once: true });
};
