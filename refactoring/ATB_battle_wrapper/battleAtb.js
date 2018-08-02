class _ATBPlayersTurnWrapper extends Phaser.Events.EventEmitter {
    
    constructor(options) {

        let { players, scene, onBarLoaded } = options;
        players = players || [];

        super();

        // set stat menus
        this.UI = new BattleUI({ scene, players, sceneHeight: 500 });
        this.onBarLoaded = onBarLoaded;

        // player registry
        this.Players = new CharacterRegistry({

            characters: players,

            onRemove: (player, callback) => {
                // remove
                let newAction = new ATBDeathAnimation({
                    executor: player, 
                    battle: this,
                    animation: player.Animations.Death(player, () => {
                    
                        console.log( player.name, ' is dead');
                        // reset current turn;
                        callback();

                        // unorthodox
                        if (!this.Players.length) {
                            console.log('game over');
                        }
                    })
                });    
            },

            onAdd: (player, callback) => {
                player.Sprite.setInteractive();
                player.index = this.Players.length;
                callback();
            }
        });
        
    }

    set onBarLoaded(v) {
        this._onBarLoaded = v;
    }
    get onBarLoaded() {
        return this._onBarLoaded;
    }

    set Players(v) {
        this._Players = v;
    }
    get Players() {
        return this._Players;
    }

    set UI(v) {
        this._UI = v;
    }
    get UI() {
        return this._UI;
    }
};



class ATBBattle extends Battle {
    constructor(options) {
        
        let {
            players,
            enemies, 
            scene, 
            input
        } = options;


        ///////////////////////////////////////////////////////////

        // player registry
        let Wrapper = new _ATBPlayersTurnWrapper({
            players,
            scene,
            onBarLoaded: player => {

                if (player.ready) return;

                this.Players.queue.push(player);      
                player.ready = true;
            }
        });

        ///////////////////////////////////////////////////////////

        

        ///////////////////////////////////////////////////////////
        
        // enemy registry
        let Enemies = new CharacterRegistry({
            characters: enemies,
            onAdd: (enemy, callback) => {
                enemy.Sprite.setInteractive();
                enemy.index = this.Enemies.length;
                console.log(this.Enemies);
                callback();
            },

            onRemove: (enemy, callback) => {

                //console.log('removing ', enemy, this.Enemies );

                let newAction = new ATBDeathAnimation({
                    executor: enemy, 
                    battle: this,
                    animation: enemy.Animations.Death(enemy, () => {
                    
                        console.log('GAH!');
                        this.resetPlayerTurn(this.Players.current, callback);
                        // reset current turn;
                        callback();

                        // unorthodox
                        if (!this.Enemies.length) {
                            console.log('you win!');
                        }
                    })
                });
            }
        });

        ///////////////////////////////////////////////////////////




        super({ Enemies, Players: Wrapper.Players, scene});
        this.onBarLoaded = player => Wrapper.onBarLoaded(player);


        ///////////////////////////////////////////////////////////

        // Initialize the Animator
        let Animator = new ActionManager({scene, battle: this});

        ///////////////////////////////////////////////////////////


        this.Animator = Animator;
        this.Enemies = Enemies;
        this.Players = Wrapper.Players;
        this.DeadPlayers = new CharacterRegistry({
            onAdd: () => {}
        });


        this.UI = Wrapper.UI;
        this.scene = scene;

        /////////////////////////////////////////////////////////////////////////////

        // input
        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.Z, key => {
            let currentMenu = this.UI.UIMenus.current;
            if (!currentMenu) return;
            // build action
            currentMenu.currentItem.onSelect({battle: this, scene});
        });

        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.X, key => {
            let menuRegistry = this.UI.UIMenus;
            if (!menuRegistry.current) return;
            if (menuRegistry.length > 1) menuRegistry.remove();
            
        });
        
        
        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.UP, key => {});
        
        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.DOWN, key => {});
        
        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.LEFT, key => {
            let currentMenu = this.UI.UIMenus.current;
            if (currentMenu) currentMenu.up(); 
        });
        
        this.Input.mapKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, key => {
            let currentMenu = this.UI.UIMenus.current;
            if (currentMenu) currentMenu.down(); 
        });

        /////////////////////////////////////////////////////////////////////////////
                
    }

    addCharacters(players, enemies) {
        players.forEach(player => this.Players.add(player) );
        enemies.forEach(enemie => this.Enemies.add(enemie) );
    }

    killCharacter(character) {

        character.Statuses.Dead = true;


        if ( character.type !== 'Ally' ) {
            this.Enemies.remove(enemy => { return enemy.index === character.index; });
            return; 
        }


        if (this.Players.current === character) { 
            this.endPlayerTurn(this.Players.current, () => {}); 
        }

        character.StatusMenu.atb.stop(character);
        this.Players.remove(player => { return player === character; });

        
    }


    applyDamageAndCheckLife(character, damage) {

        if (character.Statuses.Dead) return;
        

        character.damage = damage;

        if (!character.life) {
            this.killCharacter(character);
        }
    }

    displayPlayerDamage(player, damage, callback) {
        
        player.displayText = new FFVIText({ 
            scene: this.scene, 
            text: damage, 
            width: 50, height: 100,
            x: player.Sprite.x,
            y: player.Sprite.y
        });

        setTimeout(() => {
            player.displayText.destroy();
            callback();
        }, 500);
    }

    init() {
        this.UI.setPlayersMenu({
            scene: this.scene, 
            battle: this, 
            players: this.Players, 
            sceneHeight: 500,
            onBarLoaded: (player) => this.onBarLoaded(player)
        });
    }

    resetPlayerTurn(player, callback) {
        
        if (!player) { callback(); return; }

        this.UI.resetMenus();
        player.ready = false;
        player.Action = false;
        //let i = this.PlayerQueue.indexOf(player);
        //if (i > -1) { this.PlayerQueue.splice(i ,1); }
        this.Players.queue.shift();
        callback(player);
    }

    endPlayerTurn(player, callback) {

        // remove targets
        this.UI.resetMenus();

        player.ready = false;
        this.Players.queue.shift();
        /*
        let i = this.PlayerQueue.indexOf(player);
        if (i > -1) { this.PlayerQueue.splice(i ,1); }
        /**/

        player.Action = false;
        player._atbCurrent = 0;
        this.Players.current = false;
        this.Animator._busy = false;

        callback(player);
    }

    endEnemyTurn(callback) {
        this.Enemies.current._atbCurrent = 0;
    }

    update() {

        this.Input.update();

        // battle.update and animator.update
        if (this.Animator._busy) return;

        // resolve atb
        this.Players.forEach( player => {
            player.StatusMenu.turnUpdate();
        });
        
        super.update(() => {

            this.Animator.resolve();
            
            // check if there is an action that needs to be loaded or resolved
            if (!this.Players.current) { return; }
            if (this.Players.current.Action) { return; }
            
            // menu
            if (!this.UI.UIMenus.length) {

                if (this.Players.current.Statuses.Dead) {
                    this.Players.queue.shift();
                    this.Players.current = false;
                    return;
                }
                /**/
                this.UI.setPlayerStartMenu({player: this.Players.current, battle: this, scene: this.scene});
            }
        });
        

    }
}

