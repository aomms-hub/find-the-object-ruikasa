import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const handlers = {};
const canvas = { dataset: {}, addEventListener: (name, fn) => { handlers[name] = fn; }, getBoundingClientRect: () => ({ left: 0, top: 0, width: 640, height: 360 }) };
const window = { addEventListener: (name, fn) => { handlers[name] = fn; } };
let enabled = 1, volume = 100, animation = 'on', paused = false, muted = false;
const sprite = { getX: () => 1211, getY: () => 19, getWidth: () => 44, getHeight: () => 42, getLayer: () => 'UI', getBehavior: () => ({ setAnimationName: name => { animation = name; } }) };
const scene = { getObjects: () => [sprite], getLayer: () => ({ convertCoords: (x, y) => [x, y] }), getVariables: () => ({ getFromIndex: () => ({ getAsNumber: () => enabled, setNumber: value => { enabled = value; } }) }) };
const game = { isPaused: () => paused, getSceneStack: () => ({ getCurrentScene: () => scene }), getGameResolutionWidth: () => 1280, getGameResolutionHeight: () => 720, getSoundManager: () => ({ setGlobalVolume: value => { volume = value; }, resumeAllActiveSounds() {} }) };
const context = vm.createContext({ window, document: { querySelector: () => canvas }, Howler: { mute(value) { muted = value; } } });
vm.runInContext(await readFile(new URL('../docs/sound-controls.js', import.meta.url), 'utf8'), context);
window.installGameSoundControls(game);
function event(point, touches = [point]) {
  return { changedTouches: [point], touches, prevented: false, stopped: false,
    preventDefault() { this.prevented = true; }, stopImmediatePropagation() { this.stopped = true; } };
}
const point = { identifier: 8, clientX: 615, clientY: 20 };
function tap() {
  const down = event(point);
  handlers.touchstart(down);
  const up = event(point, []);
  handlers.touchend(up);
  assert.equal(down.stopped, true, 'touch must not reach simulated mouse controls');
  assert.equal(up.prevented, true, 'no duplicate synthetic mouse event');
}
tap();
assert.deepEqual([enabled, volume, animation], [0, 0, 'off']);
assert.equal(muted, true, 'HTML5 audio must be muted, not just have volume zero');
tap();
assert.deepEqual([enabled, volume, animation], [1, 100, 'on']);
assert.equal(muted, false);
handlers.touchstart(event(point));
handlers.touchcancel(event(point, []));
assert.equal(enabled, 1, 'cancel is not a tap');
handlers.touchstart(event(point));
const far = { ...point, clientY: 50 };
handlers.touchmove(event(far));
handlers.touchend(event(far, []));
assert.equal(enabled, 1, 'drag is not a tap');
paused = true;
handlers.touchstart(event(point));
handlers.touchend(event(point, []));
assert.equal(enabled, 1, 'popup blocks sound-button taps');
console.log('Exported sound sprite checks passed: scaled mobile hit area, mute/unmute, cancellation, drag, and paused game.');
