// battle damage
import BattleDamage from '../../battle_utils/battle-damage.js';
import DefaultBattleAnimation from '../animation-default.js';

import THEWATERFALL from '../../engine/index.js';
const {AwaitWaterfall} = THEWATERFALL;
import Utils from '../../animations_phaser/index.js';
const {ApplySpriteTint, TrembleTween, BlinkTween} = Utils;



function ComputeFightDamageValue(exec, target) {

    let value = 30;
    let atkRoll = Phaser.Math.Between(1, exec.Stats.get('strength') ) * 2;
    let defRoll = Phaser.Math.Between(1, target.Stats.get('defense') ) * 2;
    
    value -= defRoll;
    value += atkRoll;
    value = (value < 0) ? 0 : value;
    

    let damage = new BattleDamage({value, blunt: true});

    Object.keys(damage.types).forEach(type => {
        if (target.events.onDamageType[type])
        target.events.onDamageType[type](damage);
    });

    return 100;
}



export default class FightAction extends DefaultBattleAnimation {
    
    constructor(options) {
        super(options);
    }

    resolve(callback) {
        this.executorWaterfall(() => {
            delete this.executor.__FightActionWaterfall;
            callback();
        });        
    }


    // executor
    executorWaterfall(callback) {
        this.executor.__FightActionWaterfall = new AwaitWaterfall([ 

            // first step
            next => {
                BlinkTween(this.executor, next);
            }, 

            // second step
            next => {
                delete this.executor.Sprite.__FightActionEvent1;
                next();
            },

            // final step
            next => {
                this.targets.forEach(target => this.targetWaterfall(target, next) );
            }
        ], (err) => {
            callback(err);
        });
    }



    // for each target
    targetWaterfall(target, callback) {

        target.__FightActionWaterfallTarget = new AwaitWaterfall([
                        
            // target first step
            next => {
                const damage = ComputeFightDamageValue(this.executor, target);
                next(damage);
            },

            // target second step
            (next, damage) => {
                TrembleTween(target, (damage) => { next(damage); });
            },

            // target final step
            (next, damage) => {
                delete target.Sprite.__FightActionEvent1;
                        
                // optional step to display damage
                //battle.displayPlayerDamage(target, damage, () => next({target, damage}) );
                //(next, {damage, target}) => {
                
                this.resolveCallback(() => {
                    //this.battle.applyDamage(target, damage);
                    callback();
                });
                
                next();
            }

        ], (err) => {});
    }

}
