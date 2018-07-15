class TargetMenu extends Menu {
	constructor(options) {

        let { scene, targets, battle } = options;
        let {Animator} = battle;
        let width = 75; 
        let height = 200;

        super({
            items: [targets],
            cullX: targets.lenght, 
            cullY: 1
        });

        this.itemIterator((item, colIndex, rowIndex) => {
            let {Sprite, name} = item;
            let {x, y} = Sprite;
            
            item._targetLabel = new FFVIText({scene, width, height, x, y, text: name});
            item.onSelect = () => Animator.setPlayerActionTargets([item]);
        });

        this.updateItems();
	}


    computeItemVisibility(item) {
        item._targetLabel.visible = (item === this.currentItem);
    }

    updateItems() {
        this.itemIterator(t => this.computeItemVisibility(t) );
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
        this.itemIterator(t => t._targetLabel.destroy() );
    }
}
