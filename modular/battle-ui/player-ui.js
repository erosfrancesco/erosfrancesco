import ATBPlayerBar from './atb-bar.js';
import MENU from '../menu_API/index.js';
let { game, 
    GameUtilities, FFVIMenu, FFVIText, FFVIMenuBackground 
} = MENU;


//
const computeArea = options => {
    let { player, sceneHeight, numberOfPlayers } = options;
    return {width: 200, height: sceneHeight / numberOfPlayers }
}

//
const computePosition = options => {
    let {player, height, playerIndex} = options;
    return { x: 900, y: height * playerIndex };
}

//
const textHeight = 40;
const sceneHeight = game.config.height;



export default class PlayerUI extends FFVIMenuBackground {
	constructor(options) {

        // get height and width from scene...
        let {scene, player, numberOfPlayers, playerIndex, onBarLoaded } = options;

        let { width, height } = computeArea({ player, sceneHeight, numberOfPlayers });
        let { x, y } = computePosition({ player, height, playerIndex });

        x -= width / 2;
        y += height / 2;
        
        super({
            scene, 
            x, y, 
            width, height,
            noArrows: true
        });

        this.playerIndex = playerIndex;

 		this.item1 = new FFVIText({scene, width, height: textHeight, x: 0, y: -textHeight, text: player.name});
        this.item2 = new FFVIText({scene, width, height: textHeight, x: 0, y: 0, text: ''});

        this.wrapper = scene.add.container(x, y);
        this.wrapper.add(this.item1.sprite);
        this.wrapper.add(this.item2.sprite);



        this.atb = new ATBPlayerBar({
            scene, 
            player,
            onBarLoaded,
            x: x - 80, 
            y: y + textHeight, 
            width: 160
        });
        //this.atb.init(player);


        this.playerInfo = player.life + ' / ' + player.mana;
        this.player = player;

        this.onBarLoaded = onBarLoaded;

        //this.player.onDamage = () => { this.playerInfo = player.life + ' / ' + player.mana; }
	}

    get player() {
        return this._player;
    }

    set player(v) {
        this._player = v;
    }

	get playerInfo() {
		return this.item2.text;
	}

	set playerInfo(v) {
		this.item2.text = v;
	}


    get playerIndex() {
        return this._playerIndex;
    }

    set playerIndex(v) {
        this._playerIndex = v;
    }

}
