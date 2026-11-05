import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

let click = '', elapsed = 0, text = '', selected = [], targets = [];
const values = [0, 1, 1, 1, 1, 0, false];
const vars = { getFromIndex: index => ({ getAsNumber: () => Number(values[index]), getAsBoolean: () => !!values[index], setNumber: value => { values[index] = value; }, setBoolean: value => { values[index] = value; }, add: value => { values[index] += value; } }) };
function object(type) {
  let found = 0;
  return { type, getPointX: () => 100, getPointY: () => 200, getWidth: () => 120, getHeight: () => 120, setZOrder() {}, activateBehavior() {}, deleteFromScene() {},
    getVariables: () => ({ get: () => ({}) }), getVariableNumber: () => found, returnVariable: () => ({ setNumber: value => { found = value; } }),
    getBehavior: name => name === 'Text' ? { setText: value => { text = value; } } : {
      setAnimationIndex: value => { selected.push(value); }, setAnimationName() {}, setWidth() {}, setHeight() {},
      addObjectPositionTween2() {}, addObjectOpacityTween3() {}, hasFinished: () => false, IsClicked: () => false
    }
  };
}
const rui = object('Rui'), normal = object('Tsukasa1');
const scene = { getScene() { return this; }, getVariables: () => vars,
  getObjects: name => name === 'Rui' ? [rui] : name === 'Dialouge' ? [object('Dialouge')] : name === 'Tsukasa1' ? [normal] : name === 'SecretTsukasa' ? targets : [],
  getGame: () => ({ getNamedEasingsManager: () => ({ resolve: value => value }) }), getOnceTriggers: () => ({ triggerOnce: () => true })
};
const noop = () => {};
const gdjs = {
  copyArray(source, target) { target.splice(0, target.length, ...source); }, randomInRange: () => selected.length % 3,
  evtsExt__PinchGesture__IsPinching: { func: () => false }, evtsExt__PinchGesture__EnableCameraPinch: { func: noop },
  evtTools: {
    input: { isMouseButtonReleased: () => !!click, isMouseButtonPressed: () => false,
      cursorOnObject(map, _, __, inverted) {
        const hit = Object.entries(map).some(([name, list]) => name === click && list.length);
        if (!inverted) for (const [name, list] of Object.entries(map)) if (name !== click) list.length = 0;
        return inverted ? !hit : hit;
      } },
    object: { createObjectOnScene(_, map) { const target = object('SecretTsukasa'); targets.push(target); map.SecretTsukasa.push(target); } },
    sound: { playSound: noop, setGlobalVolume: noop, playMusicOnChannel: noop },
    runtimeScene: { sceneJustBegins: () => false, resetTimer: () => { elapsed = 0; }, getTimerElapsedTimeInSecondsOrNaN: () => elapsed },
    variable: { getVariableNumber: value => value.getAsNumber() },
    common: { toString: String }, camera: { setCameraZoom: noop, clampCamera: noop }
  }
};
vm.runInNewContext(await readFile(new URL('../docs/code0.js', import.meta.url), 'utf8'), { gdjs, Hashtable: { newFrom: value => value }, Howler: { _muted: false, mute: noop } });
const frame = () => gdjs.Find_32TsukasaCode.eventsList0(scene);
click = 'Rui'; frame(); frame(); frame();
assert.deepEqual(selected, [0, 1, 2]);
assert.equal(values[0], 0, 'secret leaves main counter unchanged');
assert.equal(values[5], 3, 'secret count increases on repeated clicks');
assert.equal(text, 'โดนเจอของลับซะแล้ว');
click = ''; elapsed = 6; frame();
assert.equal(values[6], false, 'exported five-second timer restores normal dialogue');
assert.equal(text, 'ช่วยตามหาคุณอัศวินหน่อยได้ไหม');
click = 'Rui'; frame();
assert.equal(values[6], true);
click = 'Tsukasa1'; frame();
assert.equal(values[0], 1); assert.equal(values[6], false);
assert.equal(text, 'เจอคุณอัศวินแล้ว 1 คน', 'normal find replaces secret dialogue');
console.log('Imported gameplay passed: repeated random secrets, separate counters, timer, and normal-find dialogue.');
