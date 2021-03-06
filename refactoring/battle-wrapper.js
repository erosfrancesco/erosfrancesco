// Character has been moved
import AtbBattle from './atb-battle.js';
//import FFVIDialog from '../menu_API/ffvi-dialog.js';

// wrapper for AtbBattle
export default class BattleWrapper extends AtbBattle {
	constructor(options) {
		super(options);
	}

	start(battle, callback) {
		// set watchDog
		this.watchDog = 0;
		this.counter = 0;
		this.forAllCharacters(() => { this.watchDog++; });

		this.forAllCharacters((character, index) => { 
			character.Animations.entrance = character.Animations.entrance || function(x, c, cb) { cb(); }
			character.Animations.entrance(battle, character, () => {
				this.counter++;
				if (this.counter >= this.watchDog) callback();
			});
		});
	}

	resume() {
		this.Stopped = false;
	}

	stop() {
		this.Stopped = true;
	}
}