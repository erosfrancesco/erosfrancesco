// import (es6)
import ColorMap from '../../colorMap.js';

// settings
const base = 40;

//
class UpArrowButton {
    constructor(options) {

        const {
            scene, 
            x, y, 
            angle = 0
        } = options;

        this.geom = Phaser.Geom.Triangle.BuildEquilateral(x, y, base);

        this.graphics = scene.add.graphics({ 
            fillStyle: { color: ColorMap.toHex('silver') },
            lineStyle: { color: ColorMap.toHex('shadow'), width: 2 }
        });
        
        Phaser.Geom.Triangle.Rotate(this.geom, angle); // rad

        this.area = this.graphics.fillTriangleShape(this.geom);
        this.triangle = this.graphics.strokeTriangleShape(this.geom);


        // touch events
        this.wrapper = scene.add.container(x, y + base / 2);
        this.wrapper.setSize(base, base);
        this.wrapper.setInteractive();

    }

    set triangle(v) {
        this._triangle = v;
    }
    get triangle() {
        return this._triangle;
    }

    destroy() {
        this.graphics.destroy();
    }

    setEvent(evnt, callback) {
        this.wrapper.on(evnt, callback);
    }
}

class DownArrowButton extends UpArrowButton {
    constructor(options) {
        options.angle = Math.PI;
        super(options);
    }
}

class LeftArrowButton extends UpArrowButton {
    constructor(options) {
        options.angle = -Math.PI / 2;
        super(options);
    }
}

class RightArrowButton extends UpArrowButton {
    constructor(options) {
        options.angle = Math.PI / 2;
        super(options);
    }
}

export default {UpArrowButton, DownArrowButton, LeftArrowButton, RightArrowButton};
