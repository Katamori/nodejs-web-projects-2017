var gameX = 1024;
var gameY = 720;

var tilesize = 32;

var mapsizeX = 256;
var mapsizeY = 32;

var mouse = {
    'X': -1,
    'Y': -1,
    'tileX': -1,
    'tileY': -1,
    'onTile': -1

}

var texts = [];

var playerStats = {
    'sizeX': tilesize*3,
    'sizeY': tilesize*3,
    'speed': 150,
    'jumpForce': 400,
    'slowForce': 100
}



//key bindings
var keyTable = [
    ["jump", "SPACEBAR"],
    ["slow", "A"],
    ["run", "D"]

]

var customKeys = {"jump": "x", "slow": "y", "run": "z"}



//the matter itself
var game = new Phaser.Game(gameX, gameY, Phaser.CANVAS, '',
    { preload: preload, create: create, update: update, render: render });



function preload(){

    game.renderer.renderSession.roundPixels = true

    var folder = '/files/games/prototype-beta/';
    var GFX = folder + 'gfx/';

    game.load.image('katamori', GFX + 'katamori.png');

    game.load.spritesheet('tileset', GFX + 'tileset.png', tilesize, tilesize);

    game.time.advancedTiming = true;
}




function create(){

    //generalizations
    var graphics = game.add.graphics(0, 0);
    window.graphics = graphics;

    //titlepic.inputEnabled = true;
    //titlepic.input.useHandCursor = true;
    //titlepic.events.onInputDown.add(destroySprite, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    drawable = game.add.group();




    //keyboard control
    addKeys();





    //the map
    map = game.add.tilemap();

    map.addTilesetImage('tileset');

    map.setCollision([1,3]);

    layer = map.create('level', mapsizeX, mapsizeY, tilesize, tilesize);
    drawable.add(layer);
    layer.resizeWorld();

    //performance improvement theoretically
    layer.renderSettings.enableScrollDelta = false;


    for(i=0;i<map.width;i++){
        for(j=0;j<map.height;j++){

          map.putTile(0, i, j, layer)

          if(j>25){
              if(i%10 == 0){ map.putTile(3, i, j, layer) }else{ map.putTile(1, i, j, layer) }

          }

        };
    };

    map.putTile(1, 5,5, layer);
    map.putTile(2, 1,2, layer);
    map.putTile(3, 3,4, layer);

    //define player
    createPlayer('katamori', 256, 256);
    //player.body.velocity.x = playerStats.speed;

    cursors = game.input.keyboard.createCursorKeys();

    drawable.sort();

    //game.camera.setSize(gameX*0.875, gameY*0.875);





}

function update(){

    mouse.X = game.input.mousePointer.x;
    mouse.Y = game.input.mousePointer.y;
    mouse.tileX = Math.floor(game.input.mousePointer.x/tilesize);
    mouse.tileY = Math.floor(game.input.mousePointer.y/tilesize);


    game.physics.arcade.collide(player, layer);

    //if (player.body.velocity.x != 0){ player.body.velocity.x = 0};
    //if (player.body.velocity.y != 0){ player.body.velocity.y = 0};

    //if (player.body.velocity.x < playerStats.speed){ player.body.velocity.x++; }

    //gravity
    player.body.velocity.y += 10;

}

function render(){

    game.debug.text("FPS: "+game.time.fps, gameX - 80, 64);
    game.debug.text("mouse: "+mouse.X+","+mouse.Y+"|"+mouse.tileX+","+mouse.tileY, gameX - 216, 96);
    game.debug.text("camera: "+game.camera.x+","+game.camera.y, gameX - 160, 128);

    game.debug.text("player's speed: "+player.body.velocity.x+"|"+player.body.velocity.y, gameX - 192, 256);
    //game.debug.body(player);

}
