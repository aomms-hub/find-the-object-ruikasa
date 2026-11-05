
if (typeof gdjs.evtsExt__PinchGesture__PinchCamera !== "undefined") {
  gdjs.evtsExt__PinchGesture__PinchCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PinchGesture__PinchCamera = {};
gdjs.evtsExt__PinchGesture__PinchCamera.idToCallbackMap = new Map();


gdjs.evtsExt__PinchGesture__PinchCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DeltaX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DeltaY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber(gdjs.evtsExt__PinchGesture__InversedX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber());
}
{eventsFunctionContext.localVariables[1].getFromIndex(1).setNumber(gdjs.evtsExt__PinchGesture__InversedY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber() + eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() + eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber() - gdjs.evtsExt__PinchGesture__Rotation.func(runtimeScene, eventsFunctionContext), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getAsNumber() * gdjs.evtsExt__PinchGesture__Scaling.func(runtimeScene, eventsFunctionContext), eventsFunctionContext.getArgument("Layer"), 0);
}
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PinchGesture__PinchCamera.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Constraint") == "Zoom only");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Constraint") == "Rotation only");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
}

}


};gdjs.evtsExt__PinchGesture__PinchCamera.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Constraint") != "No constraint");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext.getArgument("Layer"), 0);
}

{ //Subevents
gdjs.evtsExt__PinchGesture__PinchCamera.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PinchGesture__PinchCamera.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PinchGesture__PinchCamera.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PinchGesture__PinchCamera.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__PinchGesture__PinchCamera.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11466340);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(gdjs.evtTools.camera.getCameraRotation(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).setNumber(gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BackupCameraCenterX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BackupCameraCenterY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BackupCameraAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("BackupCameraZoom", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(gdjs.evtTools.camera.getCameraRotation(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}

{ //Subevents
gdjs.evtsExt__PinchGesture__PinchCamera.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PinchGesture__PinchCamera.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PinchGesture__IsPinching.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PinchGesture__PinchCamera.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PinchGesture__PinchCamera.func = function(runtimeScene, Layer, Constraint, parentEventsFunctionContext) {
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
if (argName === "Layer") return Layer;
if (argName === "Constraint") return Constraint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PinchGesture__PinchCamera.eventsList5(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PinchGesture__PinchCamera.registeredGdjsCallbacks = [];