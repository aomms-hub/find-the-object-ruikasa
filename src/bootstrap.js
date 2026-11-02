(function() {
    //Check the game files were all loaded (in a preview, they can be exported
    //again while this page is still loading them).
    if (!gdjs.projectData) {
        throw new Error(
            "The game data was not loaded: some files of the game are missing or could not be read."
        );
    }

    // Keep presentation settings here so a new export does not restore branding.
    gdjs.projectData.properties.loadingScreen.showGDevelopSplash = false;
    gdjs.projectData.properties.watermark.showWatermark = false;

    //Initialization
    var game = new gdjs.RuntimeGame(gdjs.projectData, gdjs.runtimeGameOptions);

    //Create a renderer
    game.getRenderer().createStandardCanvas(document.body);

    //Bind keyboards/mouse/touch events
    game.getRenderer().bindStandardEvents(game.getInputManager(), window, document);

    //Load all assets and start the game
    game.loadAllAssets(function() {
        game.startGameLoop();
    });
})();
