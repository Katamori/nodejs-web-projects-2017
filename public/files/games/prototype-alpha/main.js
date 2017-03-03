var gameX = 1024;
var gameY = 720;

var tilesize = 32;
var mapsize = 48;

var mouse = {
  'X': -1,
  'Y': -1,
  'tileX': -1,
  'tileY': -1,
  'onTile': -1

}

var HUD = {

  'constants': {
    'vertCompW': gameX*0.3, 'vertCompH': gameY*0.2,
    'horiCompW': gameY*0.2, 'horiCompH': gameX*0.3,
    'vertOffset': gameY*0.02,
    'horiOffset': gameX*0.02,
  }
}

var components = {

  'upper': {
    'startX': gameX*0.5 - HUD.constants.vertCompW/2,
    'startY': HUD.constants.vertOffset,
    'width': HUD.constants.vertCompW, 'height': HUD.constants.vertCompH },

  'lower': {
    'startX': gameX*0.5 - HUD.constants.vertCompW/2,
    'startY': gameY-HUD.constants.vertOffset-HUD.constants.vertCompH,
    'width': HUD.constants.vertCompW, 'height': HUD.constants.vertCompH },

  'left': {
    'startX': HUD.constants.horiOffset,
    'startY': gameY*0.5 - HUD.constants.horiCompH/2,
    'width': HUD.constants.horiCompW,
    'height': HUD.constants.horiCompH },

  'right': {
    'startX': gameX - HUD.constants.horiOffset - HUD.constants.horiCompW,
    'startY': gameY*0.5 - HUD.constants.horiCompH/2,
    'width': HUD.constants.horiCompW,
    'height': HUD.constants.horiCompH }

};

var inspectionEnabled = false;

var texts = [];

var playerStats = {
  'sizeX': tilesize*3,
  'sizeY': tilesize*3,
  'speed': 200
}

var inspectionModes = [
  {}
];

var game = new Phaser.Game(gameX, gameY, Phaser.CANVAS, '',
    { preload: preload, create: create, update: update, render: render });



function preload(){

  game.renderer.renderSession.roundPixels = true

  var folder = '/files/games/prototype-alpha/';
  var GFX = folder + 'gfx/';

  game.load.image('katamori', GFX + 'katamori.png');

  game.load.spritesheet('tileset', GFX + 'tileset.png', tilesize, tilesize);

  game.time.advancedTiming = true;
}




function create(){

  game.physics.startSystem(Phaser.Physics.ARCADE);
  drawable = game.add.group();

  map = game.add.tilemap();

  map.addTilesetImage('tileset');

  map.setCollision([1,3]);

  layer = map.create('level', mapsize, mapsize, tilesize, tilesize);
  layer.resizeWorld();


  //performance improvement theoretically
  layer.renderSettings.enableScrollDelta = false;

  drawable.add(layer);




  for(i=0;i<map.width;i++){
      for(j=0;j<map.height;j++){

          map.putTile(0, i, j, layer)
          //if(i==0||j==0){map.putTile(1, i, j, layer)}else{map.putTile(0, i, j, layer)}

      };
  };

  map.putTile(1, 5,5, layer);
  map.putTile(2, 1,2, layer);
  map.putTile(3, 3,4, layer);

  //define player
  createPlayer('katamori', 256, 256);

  cursors = game.input.keyboard.createCursorKeys();

  drawable.sort();

  //game.camera.setSize(gameX*0.875, gameY*0.875);

  //HUD placeholders
  var graphics = game.add.graphics(0, 0);

  graphics.lineStyle(2, 0x0000FF, 1);

  graphics.drawRect(components.upper.startX, components.upper.startY,
                    components.upper.width, components.upper.height);

  graphics.drawRect(components.lower.startX, components.lower.startY,
                    components.lower.width, components.lower.height);

  graphics.drawRect(components.left.startX, components.left.startY,
                    components.left.width, components.left.height);

  graphics.drawRect(components.right.startX, components.right.startY,
                    components.right.width, components.right.height);

  window.graphics = graphics;
  //titlepic.inputEnabled = true;
  //titlepic.input.useHandCursor = true;
  //titlepic.events.onInputDown.add(destroySprite, this);


}

function update(){

  mouse.X = game.input.mousePointer.x;
  mouse.Y = game.input.mousePointer.y;
  mouse.tileX = Math.floor(game.input.mousePointer.x/tilesize);
  mouse.tileY = Math.floor(game.input.mousePointer.y/tilesize);


  game.physics.arcade.collide(player, layer);

  if (player.body.velocity.x != 0){ player.body.velocity.x = 0};
  if (player.body.velocity.y != 0){ player.body.velocity.y = 0};


  if (cursors.up.isDown) {        player.body.velocity.y = -playerStats.speed};
  if (cursors.left.isDown) {      player.body.velocity.x = -playerStats.speed};
  if (cursors.right.isDown) {     player.body.velocity.x = playerStats.speed};
  if (cursors.down.isDown) {      player.body.velocity.y = playerStats.speed};

}

function render(){

  game.debug.text("FPS: "+game.time.fps, gameX - 80, 64);
  game.debug.text("mouse: "+mouse.X+","+mouse.Y+"|"+mouse.tileX+","+mouse.tileY, gameX - 216, 96);
  game.debug.text("camera: "+game.camera.x+","+game.camera.y, gameX - 160, 128);
  //game.debug.body(player);

}
