class KeyInputMapper {
	constructor(options) {

        let { debounce, input, keys, scene } = options;
        let keycodes = Phaser.Input.Keyboard.KeyCodes;

        this.PhaserKeyboard = scene.input.keyboard; // can't extend
        this.debounce = debounce || 8;
        this.debounceCounter = 0;
        

        // default keys
        let keyZ = this.PhaserKeyboard.addKey(keycodes.Z);
        let keyX = this.PhaserKeyboard.addKey(keycodes.X);
        keyZ.command = function (e) { console.log(e); };
        keyX.command = function (e) { console.log(e); };

        let cursors = this.PhaserKeyboard.createCursorKeys();
    	cursors.up.command = function (e) { console.log(e); };
    	cursors.down.command = function (e) { console.log(e); };
    	cursors.left.command = function (e) { console.log(e); };
    	cursors.right.command = function (e) { console.log(e); };


        // default input loop
        this.input = input || function(keys) { keys.forEach(key => { if (key.isDown) key.command(key) }); };

    }

    get debounce() { return this._debounce; }
	set debounce(v) { this._debounce = v; }

	get debounceCounter() { return this._debounceCounter; }
	set debounceCounter(v) { this._debounceCounter = v; }

	get PhaserKeyboard() { return this._PhaserKeyboard; }
	set PhaserKeyboard(v) { this._PhaserKeyboard = v; }

	get input() { return this._input; }
	set input(v) { this._input = v; }

    mapKey(keyCode, command) {
        let key = this.PhaserKeyboard.keys[keyCode];
        key = key || this.PhaserKeyboard.addKey(keyCode);
        key.command = command;
    }

    removeKey(keyCode) {
        delete this.PhaserKeyboard.keys[keyCode];
    }

	update() {
		this.debounceCounter++;
		this.debounceCounter %= this.debounce;
		if (!this.debounceCounter) this.input(this.PhaserKeyboard.keys);
	}
}
