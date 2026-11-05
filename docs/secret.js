window.isRuiSecretTap = scene =>
  gdjs.evtTools.input.isMouseButtonReleased(scene, 'Left') &&
  scene.getObjects('Rui').some(object => object.cursorOnObject());

(() => {
  const reveals = new WeakMap();
  const secretDialogueCounts = new WeakMap();
  gdjs.registerRuntimeScenePostEventsCallback(scene => {
    const secretCounter = scene.getVariables().get('secretCounter');
    if (secretCounter.getAsNumber() === 0 && window.isRuiSecretTap(scene)) {
      const rui = scene.getObjects('Rui').find(object => object.cursorOnObject());
      const target = scene.createObject('SecretTsukasa');
      if (!target) return;
      target.setLayer(rui.getLayer());
      target.setWidth(120);
      target.setHeight(120);
      const x = rui.getX() + rui.getWidth() / 2 - 60;
      const y = rui.getY() + rui.getHeight() / 3 - 60;
      target.setPosition(x, y);
      target.setZOrder(110);
      target.getVariables().get('found').setNumber(1);
      const tween = target.getBehavior('Tween');
      const easing = scene.getGame().getNamedEasingsManager();
      tween.addObjectPositionTween2('secret-float', x, y - 35, easing.resolve('easeOutCubic', ''), 0.7, false);
      tween.addObjectOpacityTween3('Opacity', 'secret-fade', 0, easing.resolve('easeInOutQuad', ''), 0.9, false);
      secretCounter.setNumber(1);
      secretDialogueCounts.set(scene, scene.getVariables().get('counter').getAsNumber());
      reveals.set(scene, target);
      gdjs.evtTools.sound.playSound(scene, 'Jump 1.aac', false, 80, 1);
    }
    const target = reveals.get(scene);
    if (target && target.getBehavior('Tween').hasFinished('secret-fade')) {
      target.deleteFromScene(scene);
      reveals.delete(scene);
    }
    if (secretDialogueCounts.has(scene) &&
        scene.getVariables().get('counter').getAsNumber() !== secretDialogueCounts.get(scene)) {
      secretDialogueCounts.delete(scene);
    }
    if (secretDialogueCounts.has(scene)) {
      for (const dialogue of scene.getObjects('Dialouge')) {
        dialogue.getBehavior('Text').setText('โดนเจอของลับซะแล้ว');
      }
    }
  });
})();
