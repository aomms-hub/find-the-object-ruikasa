// Keep rendering density separate from scene coordinates. The exported scene
// renderer uses backing-buffer width, which would scale the world on HiDPI.
(() => {
  const gamePrototype = gdjs.RuntimeGamePixiRenderer.prototype;
  const initialize = gamePrototype.initializeRenderers;
  gamePrototype.initializeRenderers = function(canvas) {
    initialize.call(this, canvas);
    if (this.getThreeRenderer()) return;
    const renderer = this.getPIXIRenderer();
    renderer.resolution = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    renderer.resize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight());
  };

  gdjs.RuntimeScenePixiRenderer.prototype.onGameResolutionResized = function() {
    const renderer = this._runtimeGameRenderer?.getPIXIRenderer();
    if (!renderer) return;
    const game = this._runtimeScene.getGame();
    // screen measures logical pixels; renderer.width measures physical pixels.
    this._pixiContainer.scale.x = renderer.screen.width / game.getGameResolutionWidth();
    this._pixiContainer.scale.y = renderer.screen.height / game.getGameResolutionHeight();
    for (const layer of this._runtimeScene._orderedLayers) layer.getRenderer().onGameResolutionResized();
  };

  // PIXI.Text rasterizes into its own texture. Raising only this resolution
  // improves text edges without changing font size or text layout.
  const textPrototype = gdjs.TextRuntimeObjectRenderer.prototype;
  const updateStyle = textPrototype.updateStyle;
  textPrototype.updateStyle = function() {
    this._text.resolution = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
    updateStyle.call(this);
  };
})();
