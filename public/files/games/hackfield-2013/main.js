var gameX = 1280;
var gameY = 1024;
var tilesize = 32;
var mapsize = 24;

var mouseX = -1;
var mouseY = -1;

//not defined in the original program, used for PhaserJS
var texts = [];

var game = new Phaser.Game(gameX, gameY, Phaser.AUTO, '',
    { preload: preload, create: create, update: update, render: render });

function preload(){


/*
	//sound effects
	SoundSet = { }

	SoundSet[1] = love.audio.newSource("nosign.wav", "static")
	SoundSet[2] = love.audio.newSource("nextlevel.wav", "static")
	SoundSet[3] = love.audio.newSource("logged.wav", "static")
	SoundSet[4] = love.audio.newSource("die.wav", "static")
	SoundSet[5] = love.audio.newSource("terminal.wav", "static")
	SoundSet[6] = love.audio.newSource("change.wav", "static")
	SoundSet[7] = love.audio.newSource("step.wav", "static")


	//uploading custom font
	font = love.graphics.newFont("slkscre.ttf", 16)
	love.graphics.setFont(font)
*/

	//uploading some graphics I made
  var folder = '/files/games/hackfield-2013/';
  var GFX = folder + 'gfx/';

  game.load.image('titlepic',     GFX + 'LOGOFINAL.png')
  game.load.image('katamoriBall', GFX + 'KATAMORI.png');

  game.load.image('borderA',      GFX + 'BORDER_VERT.png');
  game.load.image('borderB',      GFX + 'BORDER_HORI.png');
  game.load.image('field',        GFX + 'TEXTFIELD.png');

  game.load.spritesheet('tilesetpic', GFX + 'TILESET.png', tilesize, tilesize);

  game.time.advancedTiming = true;
}


//variables
i = 0;
j = 0;
k = 0;
l = 0;
N = 0;

ownX = 544;
ownY = 384;
meOnField_X = 1;
meOnField_Y = 1;

ingameChecker = 0
timeChecker = 0
seconds = 0
roundCounter = 0

loggedAmount = 0
terminalsVisited = 0
terminalCondition = 0
hasDynamic = false
dynamicDir = 1
dynamic_X = 0
dynamic_Y = 0
viralImpact = false
mainMenu = true
about = false
theEnd = false
introActive = false

difficulty = 1
level = 1

gameOver = false


datum = Math.floor((Math.random() * 14)+10) + ":" +
        Math.floor((Math.random() * 50)+10) + ", " +
        Math.floor((Math.random() * 18)+10) + ".0" +
        Math.floor((Math.random() * 10)) + ", 2036";


ownPlace = citySet[Math.floor((Math.random() * citySet.length))];




function create(){

  var titlepic = game.add.sprite(512,800, 'titlepic');
  var katamoriBall = game.add.sprite(1080,800, 'katamoriBall');

  game.add.sprite(512,768, 'borderA');
	game.add.sprite(0,768, 'borderA');
	game.add.sprite(480,0, 'borderB');

  //initialize PhaserJS arcade engine
  //game.physics.startSystem(Phaser.Physics.ARCADE);
  drawable = game.add.group();

  //creating map
  map = game.add.tilemap();

  //uploading tileset - much less complicated here :P
  map.addTilesetImage('tilesetpic');


	//loading functions
	//generateBrandNewLevel();

  game.inputEnabled = true;
  game.input.useHandCursor = true;


}



function update(){

    //mouse
    mouseX = game.input.mousePointer.x;
    mouseY = game.input.mousePointer.y;

  	//timing
  	timeChecker++;
/*
  	if not GameOver and not IntroActive and not MainMenu then
  	IngameChecker = IngameChecker+1
  	Seconds = math.floor(IngameChecker/60)
  	else
  	IngameChecker = 0
  	Seconds = 0
  	end


  	if not MainMenu then
  		--counting field position
  		MeOnField_X = math.floor((Own_X-512)/32)+1
  		MeOnField_Y = math.floor(Own_Y/32)+1

  		--calling functions that must be active in every frame
  		if not GameOver and Map[MeOnField_X][MeOnField_Y] ~= 5 then
  			ProcGen()
  		end

  		--behaviours that can be checked on every frame
  		AntiVirus()
  	end

  */


}


function render(){

//print('mouse', mouseX+"/"+mouseY, mouseX, mouseY);

game.debug.text("FPS: "+game.time.fps, 32, 32);
game.debug.text("mouse: "+mouseX+"|"+mouseY, 32, 64);
game.debug.text(timeChecker, 32, 96);


/*




	if not MainMenu and not IntroActive then
		if not TheEnd then
			--HUD
			for k=0,8 do
				love.graphics.draw(Field,24,24+k*48)
			end

			for k=0,2 do
				love.graphics.draw(Field,24,632+k*48)
			end
		end

		for j=1,24 do
			for i=1, 24 do
				love.graphics.drawq(TilesetPic, Tileset[Map[j][i]], 512+(j-1)*32, (i-1)*32)
				love.graphics.drawq(TilesetPic, Tileset[9], Own_X, Own_Y)
				end
			end
	end

*/
	textWriter();



}


/*

CUSTOM MADE FUNCTIONS

*/

/*
function love.keyreleased(key)

	-- behaviour calling

	if key == 'w' or key == 's' or key == 'a' or key == 'd' then
		LogPoint_Logging()
		VisitTerminal()

		if GameOver then
			Restart()
		end
	end

	if key == ' ' then
		NextLevel()
	end

	if not MainMenu then
	--moving
		if key == 'w' then
			if Own_Y > 0 and Physics(Map[MeOnField_X][MeOnField_Y-1]) then
			Own_Y = Own_Y - 32

			love.audio.play(SoundSet[7])
				if not SoundSet[7]:isStopped()
				then
					if TimeChecker%1==0 then
						SoundSet[7]:rewind()
					end
				end
			end
		end

		if key == 'a' then
			if Own_X > 512 and Physics(Map[MeOnField_X-1][MeOnField_Y]) then
			Own_X = Own_X - 32

			love.audio.play(SoundSet[7])
				if not SoundSet[7]:isStopped()
				then
					if TimeChecker%1==0 then
						SoundSet[7]:rewind()
					end
				end
			end
		end

		if key == 's' then
			if Own_Y < 736 and Physics(Map[MeOnField_X][MeOnField_Y+1]) then
			Own_Y = Own_Y + 32

			love.audio.play(SoundSet[7])
				if not SoundSet[7]:isStopped()
				then
					if TimeChecker%1==0 then
						SoundSet[7]:rewind()
					end
				end
			end
		end

		if key == 'd' then
			if Own_X < 1248 and Physics(Map[MeOnField_X+1][MeOnField_Y]) then
			Own_X = Own_X + 32

			love.audio.play(SoundSet[7])
				if not SoundSet[7]:isStopped()
				then
					if TimeChecker%1==0 then
						SoundSet[7]:rewind()
					end
				end
			end
		end
	end
	-- just a simple exit, to make testing easier

	if key == 'escape' then
		if Level == 50 and not GameOver then
			TheEnd = true
		else
			love.event.push('quit')
		end
	end

end
*/

function restart(){

  //variable reset (practically resets every variable into the initial state)
  i = 0;
  j = 0;
  k = 0;
  l = 0;
  N = 0;

  ownX = 544;
  ownY = 384;
  meOnField_X = 1;
  meOnField_Y = 1;

  ingameChecker = 0
  timeChecker = 0
  seconds = 0
  roundCounter = 0

  loggedAmount = 0
  terminalsVisited = 0
  terminalCondition = 0
  hasDynamic = false
  dynamicDir = 1
  dynamic_X = 0
  dynamic_Y = 0
  viralImpact = false
  mainMenu = true
  about = false
  theEnd = false
  introActive = false

  difficulty = 1
  level = 1

  gameOver = false

	//loading functions
	GenerateBrandNewLevel()

}
