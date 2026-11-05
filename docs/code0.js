gdjs.Find_32TsukasaCode = {};
gdjs.Find_32TsukasaCode.localVariables = [];
gdjs.Find_32TsukasaCode.idToCallbackMap = new Map();
gdjs.Find_32TsukasaCode.GDTsukasa1Objects1= [];
gdjs.Find_32TsukasaCode.GDTsukasa1Objects2= [];
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1= [];
gdjs.Find_32TsukasaCode.GDTsukasa2Objects2= [];
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1= [];
gdjs.Find_32TsukasaCode.GDTsukasa3Objects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects2= [];
gdjs.Find_32TsukasaCode.GDbackgroundObjects1= [];
gdjs.Find_32TsukasaCode.GDbackgroundObjects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects2= [];
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects1= [];
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects2= [];
gdjs.Find_32TsukasaCode.GDCounterObjects1= [];
gdjs.Find_32TsukasaCode.GDCounterObjects2= [];
gdjs.Find_32TsukasaCode.GDDialogueBarObjects1= [];
gdjs.Find_32TsukasaCode.GDDialogueBarObjects2= [];
gdjs.Find_32TsukasaCode.GDDialougeObjects1= [];
gdjs.Find_32TsukasaCode.GDDialougeObjects2= [];
gdjs.Find_32TsukasaCode.GDRuiObjects1= [];
gdjs.Find_32TsukasaCode.GDRuiObjects2= [];
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects1= [];
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects2= [];
gdjs.Find_32TsukasaCode.GDtapeObjects1= [];
gdjs.Find_32TsukasaCode.GDtapeObjects2= [];
gdjs.Find_32TsukasaCode.GDNewSpriteObjects1= [];
gdjs.Find_32TsukasaCode.GDNewSpriteObjects2= [];
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1= [];
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects2= [];
gdjs.Find_32TsukasaCode.GDZoomInObjects1= [];
gdjs.Find_32TsukasaCode.GDZoomInObjects2= [];
gdjs.Find_32TsukasaCode.GDZoomOutObjects1= [];
gdjs.Find_32TsukasaCode.GDZoomOutObjects2= [];
gdjs.Find_32TsukasaCode.GDResetViewObjects1= [];
gdjs.Find_32TsukasaCode.GDResetViewObjects2= [];
gdjs.Find_32TsukasaCode.GDDragAreaObjects1= [];
gdjs.Find_32TsukasaCode.GDDragAreaObjects2= [];


gdjs.Find_32TsukasaCode.mapOfGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa1Objects1ObjectsGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa2Objects1ObjectsGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa3Objects1Objects = Hashtable.newFrom({"Tsukasa1": gdjs.Find_32TsukasaCode.GDTsukasa1Objects1, "Tsukasa2": gdjs.Find_32TsukasaCode.GDTsukasa2Objects1, "Tsukasa3": gdjs.Find_32TsukasaCode.GDTsukasa3Objects1});
gdjs.Find_32TsukasaCode.mapOfGDgdjs_9546Find_959532TsukasaCode_9546GDSound_95959595buttonObjects1Objects = Hashtable.newFrom({"Sound_button": gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1});
gdjs.Find_32TsukasaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tsukasa1"), gdjs.Find_32TsukasaCode.GDTsukasa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tsukasa2"), gdjs.Find_32TsukasaCode.GDTsukasa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tsukasa3"), gdjs.Find_32TsukasaCode.GDTsukasa3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Find_32TsukasaCode.mapOfGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa1Objects1ObjectsGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa2Objects1ObjectsGDgdjs_9546Find_959532TsukasaCode_9546GDTsukasa3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getVariables().get("found")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getVariables().get("found")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getVariables().get("found")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa1Objects1 */
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa2Objects1 */
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa3Objects1 */
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].returnVariable(gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getVariables().get("found")).setNumber(1);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].returnVariable(gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getVariables().get("found")).setNumber(1);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].returnVariable(gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getVariables().get("found")).setNumber(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].setZOrder(100);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].setZOrder(100);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].setZOrder(100);
}
}
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getBehavior("Tween").addObjectPositionTween2("floatup", (gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getPointX("")), (gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getPointY("")) - 35, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutCubic", ""), 0.7, false);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getBehavior("Tween").addObjectPositionTween2("floatup", (gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getPointX("")), (gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getPointY("")) - 35, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutCubic", ""), 0.7, false);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getBehavior("Tween").addObjectPositionTween2("floatup", (gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getPointX("")), (gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getPointY("")) - 35, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutCubic", ""), 0.7, false);
}
}
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "fadeOut", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutQuad", ""), 0.9, false);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "fadeOut", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutQuad", ""), 0.9, false);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "fadeOut", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutQuad", ""), 0.9, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump 1.aac", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tsukasa1"), gdjs.Find_32TsukasaCode.GDTsukasa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tsukasa2"), gdjs.Find_32TsukasaCode.GDTsukasa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tsukasa3"), gdjs.Find_32TsukasaCode.GDTsukasa3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getVariables().get("found")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getVariables().get("found")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getVariableNumber(gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getVariables().get("found")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].getBehavior("Tween").hasFinished("fadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].getBehavior("Tween").hasFinished("fadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].getBehavior("Tween").hasFinished("fadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[k] = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa1Objects1 */
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa2Objects1 */
/* Reuse gdjs.Find_32TsukasaCode.GDTsukasa3Objects1 */
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDTsukasa3Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialouge"), gdjs.Find_32TsukasaCode.GDDialougeObjects1);
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDDialougeObjects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDDialougeObjects1[i].getBehavior("Text").setText("เจอคุณอัศวินแล้ว " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + " คน");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Barroom Ballet.aac", 1, true, 30, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_button"), gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Find_32TsukasaCode.mapOfGDgdjs_9546Find_959532TsukasaCode_9546GDSound_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sound_button"), gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sound_button"), gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
{for(var i = 0, len = gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZoomIn"), gdjs.Find_32TsukasaCode.GDZoomInObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDZoomInObjects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDZoomInObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDZoomInObjects1[k] = gdjs.Find_32TsukasaCode.GDZoomInObjects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDZoomInObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) + 0.25, 3));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZoomOut"), gdjs.Find_32TsukasaCode.GDZoomOutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDZoomOutObjects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDZoomOutObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDZoomOutObjects1[k] = gdjs.Find_32TsukasaCode.GDZoomOutObjects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDZoomOutObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) - 0.25, 1));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResetView"), gdjs.Find_32TsukasaCode.GDResetViewObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Find_32TsukasaCode.GDResetViewObjects1.length;i<l;++i) {
    if ( gdjs.Find_32TsukasaCode.GDResetViewObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Find_32TsukasaCode.GDResetViewObjects1[k] = gdjs.Find_32TsukasaCode.GDResetViewObjects1[i];
        ++k;
    }
}
gdjs.Find_32TsukasaCode.GDResetViewObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
}

}


};

gdjs.Find_32TsukasaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa1Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa2Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa3Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDbackgroundObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDbackgroundObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDCounterObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDCounterObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDialogueBarObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDialogueBarObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDialougeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDialougeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDRuiObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDRuiObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDtapeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDtapeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDNewSpriteObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDNewSpriteObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDZoomInObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDZoomInObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDZoomOutObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDZoomOutObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDResetViewObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDResetViewObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDragAreaObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDragAreaObjects2.length = 0;

gdjs.Find_32TsukasaCode.eventsList0(runtimeScene);
gdjs.Find_32TsukasaCode.GDTsukasa1Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa1Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa2Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa2Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa3Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDTsukasa3Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595treeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bushObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595stoneObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDbackgroundObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDbackgroundObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595cloudObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595birdObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595bird_95952Objects2.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDcover_9595balloonObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDCounterObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDCounterObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDialogueBarObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDialogueBarObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDialougeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDialougeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDRuiObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDRuiObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDbacgkground_9595frameObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDtapeObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDtapeObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDNewSpriteObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDNewSpriteObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDSound_9595buttonObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDZoomInObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDZoomInObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDZoomOutObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDZoomOutObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDResetViewObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDResetViewObjects2.length = 0;
gdjs.Find_32TsukasaCode.GDDragAreaObjects1.length = 0;
gdjs.Find_32TsukasaCode.GDDragAreaObjects2.length = 0;


return;

}

gdjs['Find_32TsukasaCode'] = gdjs.Find_32TsukasaCode;
