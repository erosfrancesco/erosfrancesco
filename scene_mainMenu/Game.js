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
			game: this.game,
			input
		});
	}
} 

let GAME = new PhaserRPG({
	width: 900,
	height: 500
});