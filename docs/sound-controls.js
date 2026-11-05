// Handle the exported Sound_button sprite directly. Capture its taps before
// GDevelop converts them to mouse events, which can lose a release on mobile.
window.installGameSoundControls = function(game) {
  const canvas = document.querySelector('canvas');
  if (!canvas || canvas.dataset.soundControls) return;
  canvas.dataset.soundControls = 'true';
  let touch = null;
  let mouse = null;
  const hit = (x, y) => {
    const scene = game.getSceneStack().getCurrentScene();
    if (!scene || game.isPaused()) return false;
    const bounds = canvas.getBoundingClientRect();
    const canvasX = (x - bounds.left) * game.getGameResolutionWidth() / bounds.width;
    const canvasY = (y - bounds.top) * game.getGameResolutionHeight() / bounds.height;
    return scene.getObjects('Sound_button').some(sprite => {
      const point = scene.getLayer(sprite.getLayer()).convertCoords(canvasX, canvasY);
      return point[0] >= sprite.getX() && point[0] <= sprite.getX() + sprite.getWidth() &&
        point[1] >= sprite.getY() && point[1] <= sprite.getY() + sprite.getHeight();
    });
  };
  const consume = event => {
    event.preventDefault();
    event.stopImmediatePropagation();
  };
  const toggle = () => {
    const scene = game.getSceneStack().getCurrentScene();
    const variable = scene.getVariables().getFromIndex(1);
    const enabled = variable.getAsNumber() !== 1;
    variable.setNumber(enabled ? 1 : 0);
    const sound = game.getSoundManager();
    if (enabled) sound.resumeAllActiveSounds();
    sound.setGlobalVolume(enabled ? 100 : 0);
    // HTML5 music on mobile may ignore Audio.volume. Audio.muted, which
    // Howler.mute sets for HTML5 nodes, silences it reliably.
    Howler.mute(!enabled);
    for (const sprite of scene.getObjects('Sound_button')) {
      sprite.getBehavior('Animation').setAnimationName(enabled ? 'on' : 'off');
    }
  };
  const moved = (start, point) => Math.hypot(point.clientX - start.x, point.clientY - start.y) > 12;
  const capture = { capture: true, passive: false };
  canvas.addEventListener('touchstart', event => {
    const point = event.changedTouches[0];
    if (touch || (point && hit(point.clientX, point.clientY))) {
      consume(event);
      if (touch) touch.cancelled = true;
      else touch = { id: point.identifier, x: point.clientX, y: point.clientY, cancelled: event.touches.length !== 1 };
    }
  }, capture);
  canvas.addEventListener('touchmove', event => {
    if (!touch) return;
    consume(event);
    const point = [...event.touches].find(point => point.identifier === touch.id);
    if (!point || event.touches.length !== 1 || moved(touch, point)) touch.cancelled = true;
  }, capture);
  canvas.addEventListener('touchend', event => {
    if (!touch) return;
    consume(event);
    const point = [...event.changedTouches].find(point => point.identifier === touch.id);
    if (!point) return;
    if (!touch.cancelled && !moved(touch, point) && hit(point.clientX, point.clientY)) toggle();
    touch = null;
  }, capture);
  canvas.addEventListener('touchcancel', event => {
    if (touch) { consume(event); touch = null; }
  }, capture);
  canvas.addEventListener('mousedown', event => {
    if (event.button !== 0 || !hit(event.clientX, event.clientY)) return;
    consume(event);
    mouse = { x: event.clientX, y: event.clientY };
  }, capture);
  window.addEventListener('mouseup', event => {
    if (!mouse || event.button !== 0) return;
    consume(event);
    if (!moved(mouse, event) && hit(event.clientX, event.clientY)) toggle();
    mouse = null;
  }, capture);
};
