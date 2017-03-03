//example codes of general usage go here

//an example to data send from callback
//source: http://stackoverflow.com/a/19443017/2320153
var out = "lofasz";

console.log(out);

function init( callback ) {

    var inside = "ezt bent deklaráltam";
    callback( inside );
};

function saveCallback( value ) {

    out = value;
};

init(saveCallback);

console.log(out);

//the testing function for reddit-api/reader-counter:

testMe = function(){

	for(h=0;h<sections.length-1;h++){

		console.log("Reader increase in "+sections[h].subreddit+" so far: "+
				(document.getElementById("current_"+sections[h].subreddit).innerHTML.split(" ")[0]-
				sections[h].values[0].reader)
				)

	}

}






/* PhaserJS: do only once per key press

game.input.keyboard.onDown.add(processKey, this);

function processKey(key) {
    if (key.keyCode == Phaser.SPACEBAR) {
        // do something space bar related
    }
}

*/
