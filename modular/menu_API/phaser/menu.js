import Menu from '../logic/menu.js';


export default class StylizableMenu extends Menu {
	constructor(options) {

		const {
			items,
			x, y,
			cullX, cullY,
			width, height,
			noArrows, verticalArrows, horizontalArrows,
      		background,
      		scene, 
      		battle
		} = options;

		super({items, cullX, cullY});

		this.scene = scene;
	  	this.background = background;

        if (horizontalArrows) {
        	this.background.leftArrow.setEvent('pointerdown', () => this.up() );
        	this.background.rightArrow.setEvent('pointerdown', () => this.down() );
        }

        if (verticalArrows) {
        	this.background.upArrow.setEvent('pointerdown', () => this.left() );
        	this.background.downArrow.setEvent('pointerdown', () => this.right() );
        }
        
        this.background.setEvent('pointerdown', () => this.currentItem.onSelect({scene, battle}) );
        

		this.wrapper = scene.add.container(x, y);
		
		this.itemIterator((t, colIndex, rowIndex) => {
			this.computeItemSize(t, colIndex, rowIndex);
			this.computeItemPosition(t, colIndex, rowIndex);
			this.computeItemVisibility(t, colIndex, rowIndex);
			this.wrapper.add(t.sprite);
		});

	}


	get width() { return this.background.width; }
	set width(v) { this.background.width = v; }


	get height() { return this.background.height; }
	set height(v) { this.background.height = v; }


	computeItemVisibility(t) {

		if (t.x >= this.width) {
			t.visible = false;
			return;
		}

		if (t.x < 0 ) {
			t.visible = false;
			return;
		}

		if (t.y >= this.height + 1 - (this.height / this.cullY ) ) {
			t.visible = false;
			return;
		}

		if (t.y < 1 - this.height / this.cullY ) {
			t.visible = false;
			return;
		}

		t.visible = true;
	}

	computeItemPosition(t, ix, iy) {
		t.x = t.width * (ix); // to work here
		t.y = t.height * (iy - (this.cullY - 1) / 2);
	}

	computeItemSize(t) {
		t.width = this.width / this.cullX;
		t.height = this.height / this.cullY;
		t.sprite.width = t.width;
		t.sprite.height = t.height;
	}


	updateItems() {
		this.itemIterator((t, colIndex, rowIndex) => {
			this.computeItemPosition(t, colIndex - this.X, rowIndex - this.Y);
			this.computeItemVisibility(t);
		});
	}


	up() {
		super.up();
		this.updateItems();
	}

	down() {
		super.down();
		this.updateItems();
	}

	left() {
		super.left();
		this.updateItems();
	}

	right() {
		super.right();
		this.updateItems();
	}

	destroy() {
		this.background.destroy();
        this.wrapper.destroy();
    }
}
