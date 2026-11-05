
if (typeof gdjs.evtsExt__PinchGesture__InversedY !== "undefined") {
  gdjs.evtsExt__PinchGesture__InversedY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PinchGesture__InversedY = {};
gdjs.evtsExt__PinchGesture__InversedY.idToCallbackMap = new Map();


gdjs.evtsExt__PinchGesture__InversedY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtsExt__PinchGesture__BeginningCenterY.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext) + gdjs.evtsExt__PinchGesture__RotatedVectorY.func(runtimeScene, eventsFunctionContext.getArgument("PositionX") - gdjs.evtsExt__PinchGesture__CurrentCenterX.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext), eventsFunctionContext.getArgument("PositionY") - gdjs.evtsExt__PinchGesture__CurrentCenterY.func(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext), -(gdjs.evtsExt__PinchGesture__Rotation.func(runtimeScene, eventsFunctionContext)), eventsFunctionContext) / gdjs.evtsExt__PinchGesture__Scaling.func(runtimeScene, eventsFunctionContext);}
}

}


};

gdjs.evtsExt__PinchGesture__InversedY.func = function(runtimeScene, PositionX, PositionY, Layer, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PinchGesture"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PinchGesture"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PinchGesture__InversedY.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PinchGesture__InversedY.registeredGdjsCallbacks = [];