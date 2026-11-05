import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const context = vm.createContext({ console, gdjs: {} });
for (const file of ['libs/jshashtable.js', 'inputmanager.js']) {
  vm.runInContext(await readFile(new URL('../docs/' + file, import.meta.url), 'utf8'), context);
}
const gdjs = context.gdjs;
gdjs.evtsExt__PinchGesture__onScenePreEvents = {
  func(scene) {
    gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList2(scene, { sceneVariablesForExtension: scene.variables });
  }
};
gdjs.evtsExt__PinchGesture__IsPinching = { func: scene => scene.values[15] === 2 };
gdjs.evtTools = { input: {
  getCursorX: scene => scene.input.getCursorX(),
  getCursorY: scene => scene.input.getCursorY()
} };
vm.runInContext(await readFile(new URL('../docs/gesture-fixes.js', import.meta.url), 'utf8'), context);

function setup() {
  const input = new gdjs.InputManager();
  input.onTouchStart(10, 100, 200);
  input.onTouchStart(20, 300, 400);
  const values = { 15: 2, 16: 12, 17: 22 };
  const drag = {};
  const behavior = { _getLayer: () => '' };
  for (const key of ['SpeedX', 'SpeedY', 'StartX', 'StartY', 'State']) behavior['_set' + key] = value => { drag[key] = value; };
  const scene = {
    values, input,
    variables: { getFromIndex: index => ({ getAsNumber: () => values[index], setNumber: value => { values[index] = value; } }) },
    getGame: () => ({ getInputManager: () => input }),
    getObjects: () => [{ getBehavior: () => behavior, activateBehavior: (_, enabled) => { drag.enabled = enabled; } }]
  };
  gdjs.evtsExt__PinchGesture__onScenePreEvents.func(scene);
  return { input, values, drag, scene };
}
for (const ended of [10, 20]) {
  const { input, values, drag, scene } = setup();
  input.onTouchEnd(ended);
  gdjs.evtsExt__PinchGesture__onScenePreEvents.func(scene);
  assert.equal(values[15], 1, 'either finger release ends pinch');
  assert.equal(input.isMouseButtonPressed(0), true, 'remaining finger keeps drag pressed');
  assert.equal(drag.State, 'Dragged');
  assert.equal(drag.enabled, true);
  assert.equal(drag.StartX, ended === 10 ? 300 : 100, 'drag starts at surviving finger');
  assert.equal(drag.SpeedX, 0, 'old momentum is cleared');
  input.onFrameEnded();
  input.onTouchMove(ended === 10 ? 20 : 10, 450, 500);
  gdjs.evtsExt__PinchGesture__onScenePreEvents.func(scene);
  assert.equal(values[15], 1, 'one-finger movement never resumes pinch');
}
{
  const { input, values, drag, scene } = setup();
  input.onTouchCancel(10);
  input.onTouchCancel(20);
  input.onFrameEnded(); // Even when one-frame touch-ended flags have gone away.
  gdjs.evtsExt__PinchGesture__onScenePreEvents.func(scene);
  assert.equal(values[15], 0);
  assert.equal(input.isMouseButtonPressed(0), false);
  assert.equal(drag.State, 'Idle');
}
console.log('Gesture regression checks passed: either finger lifted, single-finger continuation, cancellation, and expired release flags.');
