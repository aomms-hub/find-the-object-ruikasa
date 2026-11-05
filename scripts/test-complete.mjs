import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

let callback, count = 0, now = 0, paused = false, popup = null, instructionsOpen = false, reloads = 0;
const buttons = {};
const game = { pause: value => { paused = value; }, getInputManager: () => ({ getAllTouchIdentifiers: () => [], onMouseButtonReleased() {}, onFrameEnded() {} }) };
const scene = { getVariables: () => ({ get: () => ({ getAsNumber: () => count }) }), getGame: () => game };
const document = {
  querySelector: () => instructionsOpen ? {} : popup,
  createElement: () => ({ setAttribute() {}, addEventListener() {}, showModal() {}, focus() {}, close() {}, remove() { popup = null; }, querySelector(selector) { return { addEventListener: (_, fn) => { buttons[selector] = fn; }, focus() {} }; } }),
  body: { append: node => { popup = node; } }
};
vm.runInNewContext(await readFile(new URL('../docs/complete.js', import.meta.url), 'utf8'), {
  document, window: { location: { reload() { reloads++; } } }, Date: { now: () => now },
  gdjs: { registerRuntimeScenePostEventsCallback: fn => { callback = fn; }, InputManager: { MOUSE_TOUCH_ID: 1, MOUSE_LEFT_BUTTON: 0 } }
});
count = 11; callback(scene); assert.equal(popup, null);
count = 12; callback(scene); assert.equal(popup, null, 'wait for final animation');
now = 1000; instructionsOpen = true; callback(scene); assert.equal(popup, null, 'do not stack modals');
instructionsOpen = false; callback(scene); assert.equal(paused, true); assert.ok(popup.innerHTML.includes('12 / 12'));
buttons['[data-action="replay"]'](); assert.equal(reloads, 1);
buttons['[data-action="continue"]'](); assert.equal(paused, false); assert.equal(popup, null);
callback(scene); assert.equal(popup, null, 'complete appears only once');
console.log('Complete checks passed: threshold, animation delay, modal coordination, continue, replay, and one-time display.');
