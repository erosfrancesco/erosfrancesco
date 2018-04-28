class PhaserInput {
	constructor(options) {
		
		let {game, input} = options;

		if (!input || !game) { return; }
		this._map = {};

		Object.keys(input.keyboard).forEach(key => {
			this._map[key] = game.input.keyboard.addKey(key);
			this._map[key].action = input.keyboard[key];
		});
		
	}

	forEach(iteratee) {
		Object.keys(this._map).forEach(key => {
			iteratee(this._map[key], key, this._map);
		});
	}
}

class PhaserRPG {
	constructor(options) {
		this.game = new Phaser.Game(options);
	}

	/**************************************************/

	// width and height

	get add() {
		return this.game.add;
	}

	get load() {
		return this.game.load;
	}

	get world() {
		return this.game.world;
	}

	/**************************************************/

	addScene(key, fun) {
		this.game.state.add(key, fun);
	}

	playScene(key) {
		this.game.state.start(key);
	}

	/***************************************************/

	setInput(input) {
		this.input = new PhaserInput({
			input,
			game: this.game
		});
	}

	updateInput() {
		this.input.forEach((keyObj, key, otherKeys) => {
			if (keyObj.isDown) {
				keyObj.action(otherKeys);
			}
		});
	}
} 

let GAME = new PhaserRPG({
	width: 900,
	height: 500
});