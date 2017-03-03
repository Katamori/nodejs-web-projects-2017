function print(name, string, x, y) {

    var style = {font: "16px Arial", fill: "white", align: "left"};

    //texts[] should exist when and/or where it's called
    if (typeof texts[name] != 'object'){
      texts[name] = game.add.text(x, y, string, style);
    }


};
/*
function destroySprite (sprite) {

    sprite.visible = false;

}
*/
function createPlayer(sheet, x, y){

    player = game.add.sprite(x, y, sheet);
    drawable.add(player);
/*
    player.animations.add('run right', [1,2], 3, true, true);
    player.animations.add('run left', [4, 5], 3, true, true);
*/
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.1;
    player.body.collideWorldBounds = true;
    player.body.setSize(playerStats.sizeX, playerStats.sizeY, 0, 0);


    game.camera.follow(player);

};

/*

THIS IS A CUSTOM REPLACEMENT OF THE ORIGINAL COLLISION COMPARISON
FUNCTION IN PHASERJS. THEORETICALLY IT SHOULD INCREASE PERFORMANCE
IN CASE OF HUGE MAPS AND SEVERAL COLLISIONS.

SOURCE: http://www.thebotanistgame.com/blog/2015/07/24/optimizing-giant-maps-lots-of-collisions.html

*/

Phaser.Tilemap.prototype.setCollisionBetween = function (start, stop, collides, layer, recalculate) {

	if (collides === undefined) { collides = true; }
	if (layer === undefined) { layer = this.currentLayer; }
	if (recalculate === undefined) { recalculate = true; }

	layer = this.getLayer(layer);

	for (var index = start; index <= stop; index++)
	{
		if (collides)
		{
			this.collideIndexes.push(index);
		}
		else
		{
			var i = this.collideIndexes.indexOf(index);

			if (i > -1)
			{
				this.collideIndexes.splice(i, 1);
			}
		}
	}

	for (var y = 0; y < this.layers[layer].height; y++)
	{
		for (var x = 0; x < this.layers[layer].width; x++)
		{
			var tile = this.layers[layer].data[y][x];

			if (tile && tile.index >= start && tile.index <= stop)
			{
				if (collides)
				{
					tile.setCollision(true, true, true, true);
				}
				else
				{
					tile.resetCollision();
				}

				tile.faceTop = collides;
				tile.faceBottom = collides;
				tile.faceLeft = collides;
				tile.faceRight = collides;
			}
		}
	}

	if (recalculate)
	{
		//  Now re-calculate interesting faces
		this.calculateFaces(layer);
	}

	return layer;

};
