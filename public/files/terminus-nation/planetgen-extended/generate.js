function generatePlanet(){
    generateName();
}

function generateName(){

    var maximum = document.getElementById("max").value
    var maxlength = 7;
    var spaceChance = 2;

    var name = "";
    var syll = 0;
    var hadSpace = false;


    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";

    //unlike in the previous version, special runes are used by default
    var runes = simpleRunes.concat(specialRunes);


    for(j=0; j<maximum; j++){

        //for evey planet, randomize the name length
        syll = Math.ceil(Math.random()*maxlength);

        for(i=0; i<syll; i++){

            name += runes[Math.floor((Math.random() * runes.length))];

            //random space, with 100/spaceChance percent of change
            //only if it's the first space and is not on the edge
            if(!(hadSpace) && (i<syll-1 && i>0) && (Math.floor(Math.random() * spaceChance) == 0))
            {   name += " "; i++; hadSpace = true; }
        }
        name = name.toLowerCase();
        document.getElementById("result").innerHTML += name + "<br>";
        //document.getElementById("result2").innerHTML += separateName + "<br>";
        name = "";
    }
}
