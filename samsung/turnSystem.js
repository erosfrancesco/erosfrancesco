class ATB {
  constructor(options) {
    this.counter = 0;
    this.max = options.max || 255;
    this.setFormula(options.expOptions, options.formula || function(character) { 
    	return character.getVelocity();
    });
  }
  
  setFormula(options, formula) {
  		this._formulaOptions = options;
  		this._formulaExp = formula;
  }

  update(character) {
    if ( this.counter < this.max ) {
      this.counter += this._formulaExp(character, this._formulaOptions);
      return Boolean( this.counter >= this.max );
    }

    return false;
  }

  get max () {
    return this._max;
  }
  set max (v) {
    this._max = v;
  }

  get counter () {
    return this._counter;
  }
  set counter(v) {
    this._counter = v;
  }
}
