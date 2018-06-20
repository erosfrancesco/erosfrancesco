class ATBBattle extends Battle {
    constructor(options) {
        options = options || {};
        
        let {
            players,
            enemies, 
            scene
        } = options;

        // player registry
        let Players = new CharacterRegistry({
            character: players,
            onAdd: (player, registry) => {
                player.menuIndex = registry.length - 1;
                player.menuDOM = new PlayerMenu({ scene, player });
                console.log(player.menuDOM);
                setInterval(() => {player.menuDOM.atb.update(player); console.log(player.name); }, 20);
            }
        });

        /*

        ///////////////////////////////////////////////////////////
        
        // enemy registry
        let Enemies = new CharacterRegistry({
            character: enemies
            // onAdd
            // onRemove
        });

        //enemies.forEach(enemy => Enemies.add(enemy) );

        ///////////////////////////////////////////////////////////

        // Initialize turn system
        let Turn = new ATBPlayerBridge({max: 2255});

        ///////////////////////////////////////////////////////////

        // Initialize the Animator
        let Animator = new ActionRegistry();

        ///////////////////////////////////////////////////////////

        super({Animator, Enemies, Players, Turn});

        this.Animator = Animator;
        this.Enemies = Enemies;
        this.Players = Players;
        this.Turn = Turn;
        this.Turn.init(this); 

        /*
        this.Players.forEach(player => {
            player.Commands = [ 
                new FightCommand({battle: this})
            ];
        });
        //
        /**/

        //this.UI = new BattleUI({players: this.Players, battle: this, game: GAME.game});
        //console.log(this.UI);
                
    }

    endPlayerTurn(player, callback) {

        // remove menus too...

        player.ready = false;
        player.Action = false;
        player._atbCurrent = 0;
        this.Players.current = false;
        this.Animator._busy = false;
    }

    endEnemyTurn(callback) {
        this.Enemies.current._atbCurrent = 0;
    }

    update() {

        // battle.update and animator.update
        if (this.Animator._busy) { return; }    
        super.update();
        this.Animator.resolve();


        // check if there is an action that needs to be loaded or resolved
        if (!this.Players.current) { return; }
        console.log(this.Players.current.name);
        if (this.Players.current.Action) { return; }

        /*
        // manage player menu and input
		if (!this.UI.Menus.length) {
			this.UI.setPlayerStartMenu({player: this.Players.current, battle: this});
		}
        /**/

    }
}

