
Log('Test field');

let p1 = new Player({
  name: "SuperPippo",
  stats: {
  	"str": 50,
  	"dex": 1,
  	"lvl": 5
  }
});

//p1.Statuses.set('haste', true);

/*
// battle pseudo-code

// first create character objects
let p1 = new Player({
  commands: {},
  name: "SuperPippo",
  stats: {},
  sprite: {}
});

let e1 = new Enemy({
	commands: {},
	name: 'BigBadFox',
	stats: {},
	sprite: {}
});

// Set PlayerRegistry and EnemyRegistry
let Players = new CharacterRegistry({
	characters: [p1],
	onRemove: (player) => {
		player.setDeadStatus();
		if (!Player.length) {
			GameOver();
		}
	}
});

let Enemies = new CharacterRegistry({
	characters: [e1],
	onRemove: (enemy) => {
		enemy.setDeadStatus();
		if (!Enemies.length) {
			GameWin();
		}
	}
});


// Set the turn system
let Turn = new ATB();
let ATBParam1 = 10;
let ATBParam2 = 2;

Turn.setFormula(character => { 
	let dex = character.getVelocity();
	if (character.type === 'Ally') {
		dex += ATBParam1;
	}
	return dex;
});

// set the Animator
let Animator = new PhaserAnimator();

// and create the battle
window.battleN00 = new Battle({
 Turn,
 Players,
 Enemies,
 Animator,
	
	Update: function () {

  // animator check
  if (this.Animator.busy) {
    return;
  }
      
 	// ATB and Turn Order resolution
 	this.forAllCharacters( character => { 
  	if ( !character.ready ) {
   if ( this.Turn.update(character) ) {
  	 	character.ready = true;
   }
  	}
 	});
      
  // check if there is a new player turn
  if ( !this.Players.current ) {
  		let newCh = this.Players.get( player => return player.ready );
  		if (newCh) { this.Players.current = newCh; }
			}

  	// check if there is a new enemy turn
			if ( !this.Enemies.current ) {
    let newCh = this.Enemies.get( enemy => return enemy.ready );
    if (newCh) { this.Enemies.current = newCh; }
 		}
 	}
	}
});
/**/