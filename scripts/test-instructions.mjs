import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const elements = [];
function element() {
  return {
    style: {}, dataset: {}, listeners: {}, isConnected: true,
    setAttribute() {}, focus() {}, showModal() {}, close() {},
    remove() { this.isConnected = false; },
    addEventListener(name, callback) { this.listeners[name] = callback; },
    querySelector(selector) { return this.children[selector]; },
    getBoundingClientRect() { return { height: 600 * (Number(this.dataset.scale) || 1) }; }
  };
}
const document = {
  createElement(tag) {
    const node = element();
    node.children = { img: element() };
    if (tag === 'dialog') node.children = { '.start': element(), '.instruction-content': element() };
    elements.push(node);
    return node;
  },
  body: { append() {} }, fonts: { ready: Promise.resolve() },
  querySelector(selector) { return selector === '.instructions-help' ? elements.find(e => e.className === 'instructions-help') : null; }
};
const viewportListeners = {};
const viewport = { width: 800, height: 400, scale: 1,
  addEventListener(name, callback) { viewportListeners[name] = callback; }, removeEventListener() {} };
const window = { innerWidth: 800, innerHeight: 400, visualViewport: viewport, addEventListener() {}, removeEventListener() {} };
window.installGameSoundControls = () => {};
const context = vm.createContext({ document, window, Howler: { mute() {} }, ResizeObserver: class { observe() {} disconnect() {} }, gdjs: { InputManager: { MOUSE_TOUCH_ID: 1, MOUSE_LEFT_BUTTON: 0 }, registerRuntimeScenePostEventsCallback() {} } });
vm.runInContext(await readFile(new URL('../docs/instructions.js', import.meta.url), 'utf8'), context);
let loads = 0, loops = 0, binds = 0, paused = false, pauses = 0, resumes = 0;
const musicCalls = [];
const volumeCalls = [];
const sceneVariables = {};
const scene = { getObjects: () => [], getVariables: () => ({ getFromIndex: index => ({ getAsNumber: () => sceneVariables[index] || 0, setNumber: value => { sceneVariables[index] = value; } }) }) };
const input = { getAllTouchIdentifiers: () => [], onMouseButtonReleased() {}, onFrameEnded() {} };
const game = {
  isPaused: () => paused, pause(value) { paused = value; },
  loadAllAssets(callback) { loads++; callback(); }, startGameLoop() { loops++; },
  getRenderer: () => ({ bindStandardEvents() { binds++; } }), getInputManager: () => input,
  getSoundManager: () => ({ pauseAllActiveSounds() { pauses++; }, resumeAllActiveSounds() { resumes++; }, setGlobalVolume(value) { volumeCalls.push(value); }, playMusicOnChannel(...args) { musicCalls.push(args); } }),
  getSceneStack: () => ({ getCurrentScene: () => scene })
};
window.showGameInstructions(game);
const currentDialog = () => elements.findLast(e => e.className === 'instructions' && e.isConnected);
assert.equal(paused, true);
assert.equal(musicCalls.length, 0, 'music waits for the Start gesture');
assert.ok(parseFloat(currentDialog().style.height) <= 376, 'popup fits viewport height');
const beforeZoom = { ...currentDialog().style };
viewport.scale = 2;
viewport.width = 400;
viewport.height = 200;
viewportListeners.resize();
assert.deepEqual(currentDialog().style, beforeZoom, 'pinch zoom must not resize the dialog');
viewport.scale = 1;
viewport.width = 800;
viewport.height = 400;
currentDialog().children['.start'].listeners.click();
assert.equal(paused, false);
for (let count = 0; count < 3; count++) {
  window.showGameInstructions(game);
  assert.equal(paused, true);
  assert.equal(currentDialog().children['.start'].textContent, 'กลับไปเล่นต่อ');
  currentDialog().children['.start'].listeners.click();
  assert.equal(paused, false);
}
assert.deepEqual({ loads, loops, binds, pauses, resumes }, { loads: 1, loops: 1, binds: 1, pauses: 0, resumes: 1 });
assert.deepEqual(musicCalls, [['Barroom Ballet.aac', 1, true, 30, 1]], 'music starts once and is not restarted on reopen');
assert.equal(sceneVariables[1], 1, 'sound is enabled');
assert.equal(sceneVariables[2], 1, 'canvas tap does not restart the music');
console.log('Instruction checks passed: viewport fit, initial start, and repeated pause/resume without reloading or duplicate input handlers.');
