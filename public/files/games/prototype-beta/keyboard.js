/*
this functions goes through every element of keyTable array which
contains every action appearing in-game and heir corresponding key
*/

function addKeys(){

    for(f=0;f<keyTable.length;f++){

        //the first line defines a PhaserJS Key object in "customKeys"
        //the second line defined a "happens only once" callback to that key
        customKeys[keyTable[f][0]] = game.input.keyboard.addKey(Phaser.Keyboard[keyTable[f][1]]);
        customKeys[keyTable[f][0]].onDown.add(keyAction[keyTable[f][0]], this);
    }
}

var keyAction = {

    "jump": function(){
            player.body.velocity.y -= playerStats.jumpForce;
    },

    "slow": function(){
            player.body.velocity.x -= playerStats.slowForce;
    },

    "run": function(){
            player.body.velocity.x += playerStats.slowForce;
    }

}
