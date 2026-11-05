// Keep pinch bookkeeping in sync with live touches, including cancellation and
// releases that happen between frames. Ended touches remain in InputManager for
// one frame, so they must be excluded explicitly.
(() => {
  const activeTouches = input => input.getAllTouchIdentifiers().filter(
    id => id !== gdjs.InputManager.MOUSE_TOUCH_ID && !input.hasTouchEnded(id)
  );

  gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList2 = (scene, context) => {
    const variables = context.sceneVariablesForExtension;
    const active = activeTouches(scene.getGame().getInputManager());
    const count = variables.getFromIndex(15).getAsNumber();
    const tracked = [16, 17].slice(0, count)
      .map(index => variables.getFromIndex(index).getAsNumber())
      .filter((id, index, ids) => active.includes(id) && ids.indexOf(id) === index);
    variables.getFromIndex(15).setNumber(tracked.length);
    tracked.forEach((id, index) => variables.getFromIndex(16 + index).setNumber(id));
  };

  // The exported input manager releases its simulated mouse on *any* finger
  // release. Keep it pressed at the surviving finger so dragging can continue.
  const endTouch = gdjs.InputManager.prototype.onTouchEnd;
  gdjs.InputManager.prototype.onTouchEnd = function(id) {
    endTouch.call(this, id);
    const remaining = activeTouches(this);
    if (this.isSimulatingMouseWithTouch() && remaining.length) {
      this._setCursorPosition(this.getTouchX(remaining[0]), this.getTouchY(remaining[0]));
      this._setMouseButtonPressed(gdjs.InputManager.MOUSE_LEFT_BUTTON);
    }
  };

  const preEvents = gdjs.evtsExt__PinchGesture__onScenePreEvents.func;
  const wasPinching = new WeakMap();
  gdjs.evtsExt__PinchGesture__onScenePreEvents.func = function(scene, context) {
    preEvents(scene, context);
    const input = scene.getGame().getInputManager();
    const touches = activeTouches(input);
    const pinching = gdjs.evtsExt__PinchGesture__IsPinching.func(scene, null);
    if (wasPinching.get(scene) && !pinching) {
      for (const object of scene.getObjects('DragArea')) {
        const behavior = object.getBehavior('ScrollableViewport');
        behavior._setSpeedX(0);
        behavior._setSpeedY(0);
        const layer = behavior._getLayer();
        behavior._setStartX(gdjs.evtTools.input.getCursorX(scene, layer, 0));
        behavior._setStartY(gdjs.evtTools.input.getCursorY(scene, layer, 0));
        behavior._setState(touches.length === 1 ? 'Dragged' : 'Idle');
        object.activateBehavior('ScrollableViewport', true);
      }
    }
    wasPinching.set(scene, pinching);
  };
})();
