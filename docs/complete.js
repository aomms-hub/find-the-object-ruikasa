// Show once per scene after the twelfth find has finished its fade animation.
(() => {
  const scenes = new WeakMap();
  gdjs.registerRuntimeScenePostEventsCallback(scene => {
    const count = scene.getVariables().get('counter').getAsNumber();
    if (count < 12) return;
    let state = scenes.get(scene);
    if (!state) {
      state = { reachedAt: Date.now(), shown: false };
      scenes.set(scene, state);
    }
    if (state.shown || Date.now() - state.reachedAt < 950) return;
    // Let an already-open instruction popup close before showing the result.
    if (document.querySelector('dialog[open]')) return;
    state.shown = true;
    const game = scene.getGame();
    game.pause(true);
    const dialog = document.createElement('dialog');
    dialog.className = 'instructions complete-dialog';
    dialog.setAttribute('aria-labelledby', 'complete-title');
    dialog.setAttribute('tabindex', '-1');
    const character = 1 + Math.floor(Math.random() * 3);
    dialog.innerHTML = `
      <div class="instruction-content complete-content">
        <p class="complete-count">12 / 12</p>
        <img class="complete-character" src="assets/images/characters/Tsukasa${character}.png" alt="tsukasa" width="400" height="400">
        <p></p>
        <h1 id="complete-title">เจอตัวคุณอัศวินแล้ว!</h1>
        <p class="complete-message">ขอบคุณที่ช่วยจอมเวท<br>ตามหาคุณอัศวินจนครบทั้ง 12 คน!</p>
        <div class="complete-continue">
          <button class="start" type="button" data-action="continue">กลับไปที่หน้าจอ</button>
        </div>
        <div class="complete-replay-wrap">
          <button class="complete-replay" type="button" data-action="replay">เล่นอีกครั้ง</button>
        </div>
        <p class="complete-message">One Two Special Express | #12SpecialExpressTH</p>
      </div>`;
    document.body.append(dialog);
    for (const event of ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel']) {
      dialog.addEventListener(event, e => e.stopPropagation());
    }
    const close = () => {
      dialog.close();
      dialog.remove();
      // Drop the dismissing tap before resuming the game.
      const input = game.getInputManager();
      for (const id of [...input.getAllTouchIdentifiers()]) {
        if (id !== gdjs.InputManager.MOUSE_TOUCH_ID) input.onTouchCancel(id - 2);
      }
      input.onMouseButtonReleased(gdjs.InputManager.MOUSE_LEFT_BUTTON);
      input.onFrameEnded();
      game.pause(false);
    };
    dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
    dialog.querySelector('[data-action="continue"]').addEventListener('click', close, { once: true });
    dialog.querySelector('[data-action="replay"]').addEventListener('click', () => window.location.reload(), { once: true });
    dialog.showModal();
    dialog.focus({ preventScroll: true });
    dialog.scrollTop = 0;
  });
})();
