class MenuRegistry {

  constructor(options) {
    this._keep = options.keep || 0;
    this._menuList = options.menus || [];
  }

  add(menu)  {
    this._menuList.push(menu);
  }

  remove() {
    if ( this._menuList[this._keep] ) {
      this._menuList.pop();
    } 
  }

  get current() {
    return this._menuList[this.menuList.length - 1];
  }    
}