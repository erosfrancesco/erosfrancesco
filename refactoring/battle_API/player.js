class Player extends Character {
  constructor(options) {
    options = options || {};
    let {name, stats, sprite, commands, onDamage} = options;

    onDamage = onDamage || function() { console.log('ouch'); }

    super({name, stats, sprite, ally: true});

    this.onDamage = onDamage;    
    this.Commands = commands;

  }

  setDeadStatus() {
    console.log('Im dead!');
  }
}
