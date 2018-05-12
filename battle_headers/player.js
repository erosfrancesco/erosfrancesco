class Player {
  constructor(options) {
    options = options || {};
    let {name, stats, sprite} = options;
    name = name || '???';

		this.type = 'Ally';
		this.name = name;
    
    this.Sprite = sprite;
    this.Stats = new StatRegistry(stats); // StatRegistry
    this.Statuses = new StatRegistry({            // StatusRegistry
      'slow': false,
      'haste': false,
      'poison': false,
      'sap': false,
      'float': false,
      'zombie': false,
      'berserk': false,
      'stop': false,
      'old': false,
      'confused': false
    }); 
    
  }

  getVelocity() {
    let v = this.Stats.get('dex');
    let l = this.getLevel();
    
    if ( this.Statuses.get('slow') ) { v = v / 2; }
    if ( this.Statuses.get('haste') ) { v = v * 2; }
    v = Math.floor(v * l);

    return (v > 255) ? 255 : v ;
  }

  getStrenght() {
    let s = this.Stats.get('str');
    let l = this.getLevel();
    
    if (this.Statuses.get('zombie')) { s = s * 5 / 4; }
    if (this.Statuses.get('berserk')) { s = s * 5 / 4; }
    s = Math.floor(s * l);
    return (s > 255) ? 255 : s;
  }

  getLevel() {
    let l = this.Stats.get('lvl');
    if (this.Statuses.get('old')) { l = l / 4; }
    return Math.floor(l);  
  }

  getLife() {
    let l = this.Stats.get('lif');
    let d = this.Stats.get('dmg');

    return (d > l) ? 0 : l - d;
  }


  getMana() {
    let l = this.Stats.get('man');
    let d = this.Stats.get('usedMana');

    return (d > l) ? 0 : l - d;
  }
  
  setDeadStatus() {
  	console.log('Im dead!');
  }
  
  setFloatStatus() {
  	SecondaryAnimator.startFloatOn(this.Sprite);
  }
}