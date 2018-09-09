import ATBBattleScene from './scene-build.js';
import ENGINE from '../engine/index.js';
let {game} = ENGINE;
import buildCharacterSprite from './sprite-utils.js';

import PLAYERS from '../battles/players/index.js';
let { PLAYERTERRACONFIG, PLAYEREDGARCONFIG, PLAYERLOCKECONFIG, PLAYERSHDOWCONFIG, playerAssets } = PLAYERS;
playerAssets.spritesheet[0].src = './sprites/' + playerAssets.spritesheet[0].src;
const players = [PLAYERTERRACONFIG, PLAYEREDGARCONFIG, PLAYERLOCKECONFIG, PLAYERSHDOWCONFIG];



const GUZMACONFIG = {
    AI: function(callback) { console.log('AI!'); callback(); },
    commands: [ 'FIGHT' ],
    name: "Guzma",
    boss: true,
    stats: {
        "str": 50,
        "def": 21,
        "dex": 5,
        "lvl": 3,
        "lif": 1700,
        "man": 38
    },
    sprite: {
        type: 'image',
        key: 'guzma',
        slot: 0,
        slotMap: [{x: 100, y: 600}],
        config: {
            scaleX: 0.70,
            scaleY: 0.70
        }
    }
};

const assets = {
    baseUrl: '../assets/',
    image: [{
        key: 'guzma',
        src: './sprites/Guzma.png'
    }, {
        key: 'background01',
        src: './backgrounds/hip_hop_streets.png'
    }],
    spritesheet: playerAssets.spritesheet
};

const enemies = [GUZMACONFIG];
const background = {
    key: 'background01',
    type: 'image',
    config: {
        scaleX: 0.5,
        scaleY: 0.5
    }
};


function BuildScene() { 
    return new ATBBattleScene({
        assets, 
        enemies, 
        players, 
        background
    }); 
}

game.scene.add('battle', BuildScene, true);
/**/