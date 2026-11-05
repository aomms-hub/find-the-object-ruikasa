
if (typeof gdjs.evtsExt__PinchGesture__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__PinchGesture__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PinchGesture__onScenePreEvents = {};
gdjs.evtsExt__PinchGesture__onScenePreEvents.idToCallbackMap = new Map();


gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber());
}
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber());
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber());
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).sub(1);
}

{ //Subevents
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).setNumber(2);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).setNumber(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(20).setNumber(gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), eventsFunctionContext));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(21).setNumber(gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()), eventsFunctionContext));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(18).setNumber(gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(19).setNumber(gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(gdjs.evtTools.common.angleBetweenPositions(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(18).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(19).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(20).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(21).getAsNumber()));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setNumber(gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(18).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(19).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(20).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(21).getAsNumber()));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).setNumber((eventsFunctionContext.sceneVariablesForExtension.getFromIndex(18).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(20).getAsNumber()) / 2);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).setNumber((eventsFunctionContext.sceneVariablesForExtension.getFromIndex(19).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(21).getAsNumber()) / 2);
}

{ //Subevents
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).setNumber(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = gdjs.evtTools.input.getStartedTouchCount(runtimeScene);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(15).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).setNumber(gdjs.evtTools.common.angleBetweenPositions(gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext)));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(12).setNumber(gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext), gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext)));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(13).setNumber((gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext) + gdjs.evtsExt__PinchGesture__TouchCanvasX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext)) / 2);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(14).setNumber((gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(16).getAsNumber(), eventsFunctionContext) + gdjs.evtsExt__PinchGesture__TouchCanvasY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(17).getAsNumber(), eventsFunctionContext)) / 2);
}
}

}


};gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList8(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PinchGesture__IsCameraPinchEnabled.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__PinchGesture__PinchCamera.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__PinchGesture__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PinchGesture__onScenePreEvents.eventsList9(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PinchGesture__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__PinchGesture__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__PinchGesture__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__PinchGesture__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__PinchGesture__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
