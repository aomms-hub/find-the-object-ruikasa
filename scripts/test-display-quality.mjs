import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

class GameRenderer {
  initializeRenderers() { this.initialized = true; }
  getThreeRenderer() { return null; }
  getPIXIRenderer() { return this.pixi; }
}
class SceneRenderer {}
class TextRenderer { updateStyle() { this.updated = true; } }
const window = { devicePixelRatio: 2 };
const PIXI = { settings: { RESOLUTION: 1 } };
vm.runInNewContext(await readFile(new URL('../docs/display-quality.js', import.meta.url), 'utf8'), {
  window, PIXI, gdjs: { RuntimeGamePixiRenderer: GameRenderer, RuntimeScenePixiRenderer: SceneRenderer, TextRuntimeObjectRenderer: TextRenderer }
});
const game = { getGameResolutionWidth: () => 1280, getGameResolutionHeight: () => 720 };
const renderer = new GameRenderer();
renderer._game = game;
renderer.pixi = { resolution: 1, resize(w, h) { this.screen = { width: w, height: h }; this.width = w * this.resolution; this.height = h * this.resolution; } };
renderer.initializeRenderers({});
assert.equal(renderer.pixi.width, 2560, 'physical buffer is doubled');
assert.equal(renderer.pixi.screen.width, 1280, 'logical viewport remains unchanged');
let layerUpdates = 0;
const sceneRenderer = new SceneRenderer();
sceneRenderer._runtimeGameRenderer = renderer;
sceneRenderer._runtimeScene = { getGame: () => game, _orderedLayers: [{ getRenderer: () => ({ onGameResolutionResized() { layerUpdates++; } }) }] };
sceneRenderer._pixiContainer = { scale: {} };
sceneRenderer.onGameResolutionResized();
assert.equal(sceneRenderer._pixiContainer.scale.x, 1, 'HiDPI must not double world scale');
assert.equal(sceneRenderer._pixiContainer.scale.y, 1);
assert.equal(layerUpdates, 1);
const text = new TextRenderer(); text._text = {}; text.updateStyle();
assert.equal(text._text.resolution, 2); assert.equal(text.updated, true);
assert.equal(PIXI.settings.RESOLUTION, 1, 'image texture defaults are untouched');
console.log('Display checks passed: 2x physical buffer, unchanged world scale, layer updates, and high-resolution text.');
