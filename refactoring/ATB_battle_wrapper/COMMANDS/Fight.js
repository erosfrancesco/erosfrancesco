class FightCommand extends _ATBCommandProto {
    constructor(options) {

        super({ label: 'FIGHT' });

        this.action = options => {

            let {player, battle, scene} = options;
            let {Players, Enemies, Animator} = battle;

            player.Action = new FightAction({executor: player, battle});

            // build player action
            Animator.addCharacterAction(player);
            
            // compute available targets and set the target menu
            let targets = [];
            Players.forEach(p => targets.push(p));
            Enemies.forEach(p => targets.push(p));

            battle.UI.UIMenus.add( new TargetMenu({ scene, targets, battle }) );
        };
    }
}





class FightAction extends _ATBActionProto {
    constructor(options) {
        super(options);
    }

    resolve(callback) {


        // executor sprite animation
        ApplySpriteTint(this.executor.Sprite, 0xff00ff);

        // targets sprite animation
        setTimeout(() => {
            ApplySpriteTint(this.executor.Sprite, 0xffffff);

            this.targets.forEach(target => {
                ApplySpriteTint(target.Sprite, 0x00ff00);

                // calc damage
                let damage = ComputeFightDamageValue(this.executor, target);
                
                // apply damages
                setTimeout(() => {
                   
                    ApplySpriteTint(target.Sprite, 0xffffff);
                    
                    this.battle.displayPlayerDamage(target, damage, () => {
                        this.resolveCallback(() => {
                            this.battle.applyDamageAndCheckLife(target, damage);
                        });
                    });
                    
                    // watch that callback!
                    callback();

                }, 1000);
                
            });
   
        }, 1000);
    }
}


function ApplySpriteTint(sprite, color) {
    sprite.setTint(color);
}

function ComputeFightDamageValue(exec, target) {

    let value = 30;
    let atkRoll = Phaser.Math.Between(1, exec.Stats.get('str') ) * 2;
    let defRoll = Phaser.Math.Between(1, target.Stats.get('def') ) * 2;
    
    value -= defRoll;
    value += atkRoll;
    value = (value < 0) ? 0 : value;
    
    let damage = new BattleDamage({value, blunt: true});

    Object.keys(damage.types).forEach(type => {
        if (target.events.onDamageType[type])
        target.events.onDamageType[type](damage);
    });

    return value;
}




