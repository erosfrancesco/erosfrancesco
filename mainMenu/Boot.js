// game settings
setGameSettings = (GameObj) => {

    // remove scrollbars
    document.body.style.overflow = 'hidden';

     // Pause if the game loses focus.
    GameObj.stage.disableVisibilityChange = true;
    
     // center
    GameObj.scale.pageAlignHorizontally = true;
    GameObj.scale.pageAlignVertically = true;

    //  Mobile settings.
    if (!GameObj.device.desktop) {
        // scale the game no lower than 480x260 and no higher than 1024x768
        GameObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        GameObj.scale.setMinMax(480, 260, 1024, 768);
        GameObj.scale.forceLandscape = true;
    }
}


// Boot scene
GAME.addScene('Boot', {
    preload: () => {
        // base settings
        setGameSettings(GAME.game);  
    },

    create: () => {
        GAME.playScene('Preloader');
    }
});


// Boot scene
GAME.addScene('Preloader', {
    preload: () => {
        // load assets for Loading scene...
        GAME.load.image('starfield', '../assets/starfield.png');
    },

    create: () => {
        let splash = GAME.add.tileSprite(0, 0, GAME.game.width, GAME.game.height, 'starfield');
        splash.autoScroll(10, 20);
    },

    update: () => {
        
    }
});
