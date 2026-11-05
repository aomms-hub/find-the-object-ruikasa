
gdjs.evtsExt__ScrollableViewport__ScrollableViewport = gdjs.evtsExt__ScrollableViewport__ScrollableViewport || {};

/**
 * Behavior generated from Scrollable viewport
 */
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport = class ScrollableViewport extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Direction = behaviorData.Direction !== undefined ? behaviorData.Direction : "";
    this._behaviorData.IsDragged = false;
    this._behaviorData.StartX = Number("") || 0;
    this._behaviorData.StartY = Number("") || 0;
    this._behaviorData.Layer = behaviorData.Layer !== undefined ? behaviorData.Layer : "";
    this._behaviorData.TargetedCameraX = Number("") || 0;
    this._behaviorData.TargetedCameraY = Number("") || 0;
    this._behaviorData.WheelScrollingDuration = behaviorData.WheelScrollingDuration !== undefined ? behaviorData.WheelScrollingDuration : Number("0.25") || 0;
    this._behaviorData.OldCameraX = Number("") || 0;
    this._behaviorData.OldCameraY = Number("") || 0;
    this._behaviorData.WheelStepSize = behaviorData.WheelStepSize !== undefined ? behaviorData.WheelStepSize : Number("120") || 0;
    this._behaviorData.State = "Idle";
    this._behaviorData.SpeedX = Number("") || 0;
    this._behaviorData.SpeedY = Number("") || 0;
    this._behaviorData.InertiaDeceleration = behaviorData.InertiaDeceleration !== undefined ? behaviorData.InertiaDeceleration : Number("800") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Direction !== undefined)
      this._behaviorData.Direction = behaviorOverriding.Direction;
    if (behaviorOverriding.IsDragged !== undefined)
      this._behaviorData.IsDragged = behaviorOverriding.IsDragged;
    if (behaviorOverriding.StartX !== undefined)
      this._behaviorData.StartX = behaviorOverriding.StartX;
    if (behaviorOverriding.StartY !== undefined)
      this._behaviorData.StartY = behaviorOverriding.StartY;
    if (behaviorOverriding.Layer !== undefined)
      this._behaviorData.Layer = behaviorOverriding.Layer;
    if (behaviorOverriding.TargetedCameraX !== undefined)
      this._behaviorData.TargetedCameraX = behaviorOverriding.TargetedCameraX;
    if (behaviorOverriding.TargetedCameraY !== undefined)
      this._behaviorData.TargetedCameraY = behaviorOverriding.TargetedCameraY;
    if (behaviorOverriding.WheelScrollingDuration !== undefined)
      this._behaviorData.WheelScrollingDuration = behaviorOverriding.WheelScrollingDuration;
    if (behaviorOverriding.OldCameraX !== undefined)
      this._behaviorData.OldCameraX = behaviorOverriding.OldCameraX;
    if (behaviorOverriding.OldCameraY !== undefined)
      this._behaviorData.OldCameraY = behaviorOverriding.OldCameraY;
    if (behaviorOverriding.WheelStepSize !== undefined)
      this._behaviorData.WheelStepSize = behaviorOverriding.WheelStepSize;
    if (behaviorOverriding.State !== undefined)
      this._behaviorData.State = behaviorOverriding.State;
    if (behaviorOverriding.SpeedX !== undefined)
      this._behaviorData.SpeedX = behaviorOverriding.SpeedX;
    if (behaviorOverriding.SpeedY !== undefined)
      this._behaviorData.SpeedY = behaviorOverriding.SpeedY;
    if (behaviorOverriding.InertiaDeceleration !== undefined)
      this._behaviorData.InertiaDeceleration = behaviorOverriding.InertiaDeceleration;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Direction: this._behaviorData.Direction,
    IsDragged: this._behaviorData.IsDragged,
    StartX: this._behaviorData.StartX,
    StartY: this._behaviorData.StartY,
    Layer: this._behaviorData.Layer,
    TargetedCameraX: this._behaviorData.TargetedCameraX,
    TargetedCameraY: this._behaviorData.TargetedCameraY,
    WheelScrollingDuration: this._behaviorData.WheelScrollingDuration,
    OldCameraX: this._behaviorData.OldCameraX,
    OldCameraY: this._behaviorData.OldCameraY,
    WheelStepSize: this._behaviorData.WheelStepSize,
    State: this._behaviorData.State,
    SpeedX: this._behaviorData.SpeedX,
    SpeedY: this._behaviorData.SpeedY,
    InertiaDeceleration: this._behaviorData.InertiaDeceleration,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Direction !== undefined)
      this._behaviorData.Direction = networkSyncData.props.Direction;
    if (networkSyncData.props.IsDragged !== undefined)
      this._behaviorData.IsDragged = networkSyncData.props.IsDragged;
    if (networkSyncData.props.StartX !== undefined)
      this._behaviorData.StartX = networkSyncData.props.StartX;
    if (networkSyncData.props.StartY !== undefined)
      this._behaviorData.StartY = networkSyncData.props.StartY;
    if (networkSyncData.props.Layer !== undefined)
      this._behaviorData.Layer = networkSyncData.props.Layer;
    if (networkSyncData.props.TargetedCameraX !== undefined)
      this._behaviorData.TargetedCameraX = networkSyncData.props.TargetedCameraX;
    if (networkSyncData.props.TargetedCameraY !== undefined)
      this._behaviorData.TargetedCameraY = networkSyncData.props.TargetedCameraY;
    if (networkSyncData.props.WheelScrollingDuration !== undefined)
      this._behaviorData.WheelScrollingDuration = networkSyncData.props.WheelScrollingDuration;
    if (networkSyncData.props.OldCameraX !== undefined)
      this._behaviorData.OldCameraX = networkSyncData.props.OldCameraX;
    if (networkSyncData.props.OldCameraY !== undefined)
      this._behaviorData.OldCameraY = networkSyncData.props.OldCameraY;
    if (networkSyncData.props.WheelStepSize !== undefined)
      this._behaviorData.WheelStepSize = networkSyncData.props.WheelStepSize;
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
    if (networkSyncData.props.SpeedX !== undefined)
      this._behaviorData.SpeedX = networkSyncData.props.SpeedX;
    if (networkSyncData.props.SpeedY !== undefined)
      this._behaviorData.SpeedY = networkSyncData.props.SpeedY;
    if (networkSyncData.props.InertiaDeceleration !== undefined)
      this._behaviorData.InertiaDeceleration = networkSyncData.props.InertiaDeceleration;
  }

  // Properties:
  
  _getDirection() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : "";
  }
  _setDirection(newValue) {
    this._behaviorData.Direction = newValue;
  }
  _getIsDragged() {
    return this._behaviorData.IsDragged !== undefined ? this._behaviorData.IsDragged : false;
  }
  _setIsDragged(newValue) {
    this._behaviorData.IsDragged = newValue;
  }
  _toggleIsDragged() {
    this._setIsDragged(!this._getIsDragged());
  }
  _getStartX() {
    return this._behaviorData.StartX !== undefined ? this._behaviorData.StartX : Number("") || 0;
  }
  _setStartX(newValue) {
    this._behaviorData.StartX = newValue;
  }
  _getStartY() {
    return this._behaviorData.StartY !== undefined ? this._behaviorData.StartY : Number("") || 0;
  }
  _setStartY(newValue) {
    this._behaviorData.StartY = newValue;
  }
  _getLayer() {
    return this._behaviorData.Layer !== undefined ? this._behaviorData.Layer : "";
  }
  _setLayer(newValue) {
    this._behaviorData.Layer = newValue;
  }
  _getTargetedCameraX() {
    return this._behaviorData.TargetedCameraX !== undefined ? this._behaviorData.TargetedCameraX : Number("") || 0;
  }
  _setTargetedCameraX(newValue) {
    this._behaviorData.TargetedCameraX = newValue;
  }
  _getTargetedCameraY() {
    return this._behaviorData.TargetedCameraY !== undefined ? this._behaviorData.TargetedCameraY : Number("") || 0;
  }
  _setTargetedCameraY(newValue) {
    this._behaviorData.TargetedCameraY = newValue;
  }
  _getWheelScrollingDuration() {
    return this._behaviorData.WheelScrollingDuration !== undefined ? this._behaviorData.WheelScrollingDuration : Number("0.25") || 0;
  }
  _setWheelScrollingDuration(newValue) {
    this._behaviorData.WheelScrollingDuration = newValue;
  }
  _getOldCameraX() {
    return this._behaviorData.OldCameraX !== undefined ? this._behaviorData.OldCameraX : Number("") || 0;
  }
  _setOldCameraX(newValue) {
    this._behaviorData.OldCameraX = newValue;
  }
  _getOldCameraY() {
    return this._behaviorData.OldCameraY !== undefined ? this._behaviorData.OldCameraY : Number("") || 0;
  }
  _setOldCameraY(newValue) {
    this._behaviorData.OldCameraY = newValue;
  }
  _getWheelStepSize() {
    return this._behaviorData.WheelStepSize !== undefined ? this._behaviorData.WheelStepSize : Number("120") || 0;
  }
  _setWheelStepSize(newValue) {
    this._behaviorData.WheelStepSize = newValue;
  }
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getSpeedX() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("") || 0;
  }
  _setSpeedX(newValue) {
    this._behaviorData.SpeedX = newValue;
  }
  _getSpeedY() {
    return this._behaviorData.SpeedY !== undefined ? this._behaviorData.SpeedY : Number("") || 0;
  }
  _setSpeedY(newValue) {
    this._behaviorData.SpeedY = newValue;
  }
  _getInertiaDeceleration() {
    return this._behaviorData.InertiaDeceleration !== undefined ? this._behaviorData.InertiaDeceleration : Number("800") || 0;
  }
  _setInertiaDeceleration(newValue) {
    this._behaviorData.InertiaDeceleration = newValue;
  }
}

/**
 * Shared data generated from Scrollable viewport
 */
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.SharedData = class ScrollableViewportSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ScrollableViewport_ScrollableViewportSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ScrollableViewport_ScrollableViewportSharedData = new gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.SharedData(
      initialData
    );
  }
  return instanceContainer._ScrollableViewport_ScrollableViewportSharedData;
}

// Methods:
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11595972);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartX(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartY(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() != "Vertical");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX((gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartX()) / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - (gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartX()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() != "Horizontal");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY((gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartY()) / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - (gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Inertia")
}
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX(gdjs.evtsExt__ScrollableViewport__MoveToZero.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInertiaDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY(gdjs.evtsExt__ScrollableViewport__MoveToZero.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInertiaDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext))
}
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12814108);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Dragged")
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Dragged");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY(0)
}

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Inertia");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Wheeled");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Wheeled")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraX(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraY(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "Horizontal");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTargetedCameraX(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TargetedCameraX(eventsFunctionContext) - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelStepSize()), eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTargetedCameraY(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TargetedCameraY(eventsFunctionContext) - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelStepSize()), eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Wheeled");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Wheeled")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraX(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraY(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "Horizontal");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTargetedCameraX(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TargetedCameraX(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelStepSize()), eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetTargetedCameraY(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TargetedCameraY(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelStepSize()), eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX()) == gdjs.evtTools.common.sign(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraX()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX(0)
}
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.sign(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY()) == gdjs.evtTools.common.sign(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraY()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY(0)
}
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0);
}

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ScrollableViewport_9595_9595ScrollableViewport_9546ScrollableViewport_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Wheeled");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelStepSize() != 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldCameraX() != gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0));
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldCameraY() != gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0));
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY(0)
}
}

}


{


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Dragged");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY() == 0);
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldCameraX(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldCameraY(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0))
}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Dragged");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.IsDraggedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraY();}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraY(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedY((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraY() - gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0)) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelScrollingDuration())
}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraX();}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.TargetedCameraXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetedCameraX(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedX((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetedCameraX() - gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLayer(), 0)) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelScrollingDuration())
}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.SetTargetedCameraXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext = {};
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle")
}
}

}


};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollableViewport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollableViewport"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ScrollableViewport::ScrollableViewport", gdjs.evtsExt__ScrollableViewport__ScrollableViewport.ScrollableViewport);
