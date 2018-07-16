buildCharacterSprite = (options) => {

    const slotMap = [
        // enemy slots        
        {x: 200, y: 400},
        {x:  50, y: 420},
        {x: 300, y: 480},
        {x:   0, y: 520},
        {x: 100, y: 600},
        {x: 250, y: 600},

        // player slots
        {x: 550, y: 400},
        {x: 500, y: 450},
        {x: 450, y: 500},
        {x: 400, y: 600}
    ];


    let {player, slot, scene, config, type, key, frame} = options;
    let {x, y} = slotMap[slot];
    let o = scene.make[type]({key, frame});


    config = config || {};
    config.originY = config.originY || 0.5;
    config.originX = config.originX || 0.5;
    Object.keys(config).forEach(key => { o[key] = config[key]; });

    let width = o.displayWidth;
    let height = o.displayHeight;

    o.x = x + width / 2;
    o.y = y - height;
    return o;
}

/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

BuildCharacterCommands = (scene, battle, commands) => {
    const COMMANDNAMEMAP = {
        'FIGHT': (options) => { return new FightCommand(options) },
        'ITEMS': (options) => { return new ItemsCommand(options) }
    };

    let C = commands.map(name => { return COMMANDNAMEMAP[name]({battle, scene}); });
    return C
}

/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

function MakeEnemy(scene, battle, options) {

    let {commands, stats, sprite, name, boss} = options;
    sprite.scene = scene;

    let enemy = new Enemy({
        commands: BuildCharacterCommands(scene, battle, commands),
        isBoss: Boolean(boss),
        name,
        sprite: buildCharacterSprite(sprite),
        stats
    });

    return enemy;
}

function MakePlayer(scene, battle, options) {

    console.log(options);

    let {commands, stats, sprite, name} = options;
    sprite.scene = scene;
    sprite.slot += 6;

    let player = new Player({
        commands: BuildCharacterCommands(scene, battle, commands),
        name,
        sprite: buildCharacterSprite(sprite),
        stats
    });

    return player;
}

/////////////////////////////////////////////////////////////////////////////