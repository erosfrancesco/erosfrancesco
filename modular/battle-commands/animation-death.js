import DefaultBattleAnimation from './animation-default.js';
import ANIAMTIONS from '../../animations_phaser/index.js';

//import AnimationUtils from './animation-utils.js';
//const {RGBATween, ApplySpriteTint} = AnimationUtils;
const {CharacterDeathTween} = ANIAMTIONS;
/*
let CharacterDeathTween = (player, callback) => {

    let {Sprite} = player;
    let {scene} = Sprite;

    let tween = RGBATween(scene, {
        targets: Sprite,
        props: {
            g: 0, 
            r: 128,
            b: 128,
            a: 0,
            ease: 'Linear' 
        },
        duration: 500,
        onComplete: callback
    });

}
/**/

export default class CharacterDeathAnimation extends DefaultBattleAnimation {
    constructor(options) {
        super(options);
        this.animation = CharacterDeathTween; //options.animation;
    }

    resolve(callback) {
        this.animation(this.executor, callback)
    }
}