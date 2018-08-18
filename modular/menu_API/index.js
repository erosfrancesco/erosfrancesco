// import modules (es6)
import MenuRegistry from './menu-registry.js';
import FFVIText from './ffvi-text.js';
import FFVIMenu from './ffvi-menu.js';
import ENGINE from '../engine/index.js';
let { game, ColorMap, KeyMapper, GameUtilities } = ENGINE;

export default { game, ColorMap, KeyMapper, GameUtilities, FFVIMenu, MenuRegistry, FFVIText };


let button1 = new FFVIText({
    scene: game.scene.scenes[0], 
    text: 'Option1', 
    x: 0, y: 0, 
    width: 250, height: 50
});


// test
let a = new FFVIMenu({
	scene: game.scene.scenes[0],
	x: 400,
    y: 300,
    width:  500,
    height: 300,
    cullX: 1,
    cullY: 1,
    horizontalArrows: true,
    verticalArrows: true,
    items: [ [button1] ]
});
