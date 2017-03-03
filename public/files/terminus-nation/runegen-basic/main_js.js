//the do-the-job part
var cont_wd = 9;					//how many runes the container should display
var cont_hg = 3;					//number of rows in container
var cont_lng = cont_wd*cont_hg;		//"content length": the multiplication of the two
var offset_result = 0;

var poolsize = cont_lng;//*25;

//program init
SetHTML();

//pool init
var rune_set = [];
Init(poolsize);

for (f=1;f<=cont_lng;f++){

	Draw(f-1, true, 0);

};



// genetic functions
function Init(num){

	for (f=1;f<=num;f++){
		rune_set.push(CreateInstance());
		rune_set[f-1][9] = 666;
	};

};


function CreateInstance(){

	//create the element itself
	var rune = [];
	for(i=1;i<10;i++){ rune.push([0,0,0,0,0,0,0,0,0]); };
	//rune.push(666);
	var cnct_set_init = [];


	
	//a rune must have a 9x9 shape, this one checks if sides are empty
	// checking the upper the right the bottom and the left
	function EdgesFilled(instance){
	
		var xp = 0;
		var yp = 0;
		var filled_u = false;
		var filled_d = false;
		var filled_l = false;
		var filled_r = false;		
		
		for(; xp<8; xp++){ filled_u = filled_u || (instance[xp][yp]%2 != 0)}; //alert(xp+" "+yp+"|"+filled_u);
		for(; yp<8; yp++){ filled_r = filled_r || (instance[xp][yp]%2 != 0)}; //alert(xp+" "+yp+"|"+filled_r);
		for(; xp>0; xp--){ filled_d = filled_d || (instance[xp][yp]%2 != 0)}; //alert(xp+" "+yp+"|"+filled_d);
		for(; yp>0; yp--){ filled_l = filled_l || (instance[xp][yp]%2 != 0)}; //alert(xp+" "+yp+"|"+filled_l);

		return (filled_u && filled_d && filled_l && filled_r);
	
	};
	
	//if an improper rune is created, then the entire process should be restarted
	while(!EdgesFilled(rune)){

		//empty grid, with highlighting of the place of nodes
		for(i=0;i<9;i++){
			for(j=0;j<9;j++){
				if(i%2 == 0 && j%2 == 0){ rune[i][j] = 4; }		//node placement
				if(i%2 != 0 || j%2 != 0){ rune[i][j] = 2; }		//connection placement
				if(i%2 != 0 && j%2 != 0){ rune[i][j] = 0; } 	//total invalid
			
				if(rune[i][j] == 2){ cnct_set_init.push([i,j]) };
			}; 
		};
	
		//and start randomizations
		var cnct_set = [];
	
		//alert(rune_set.length+" |at init:"+cnct_set_init.length);
		
		//amount of connections
		var cnct = randomINT(7,27);
		
		//random connections
		for(m=1;m<cnct;m++){

			var randtemp = randomINT(0, cnct_set_init.length-1);

			rune[cnct_set_init[randtemp][0]][cnct_set_init[randtemp][1]]= 1;
			
			//array to store connections
			cnct_set.push([cnct_set_init[randtemp][0], cnct_set_init[randtemp][1]]);
			
			//then delete from set
			cnct_set_init.splice(randtemp,1);	
		};
	
		//now cut some back
		var reit = randomINT(1,cnct-4);	
		
		for(p=1;p<reit;p++){
			
			//select from a set, and delete after "change" 
			if(cnct_set.length > 1){
				var randtemp = randomINT(0, cnct_set.length-1);
				rune[cnct_set[randtemp][0]][cnct_set[randtemp][1]] = 2;
				cnct_set.splice(randtemp,1);			
			};
		};

		//"activate" nodes
		for(i=0;i<9;i++){
			for(j=0;j<9;j++){
		
				if(	
					rune[i][j] == 4 && !(												//if an element is a node				
					(typeof rune[i-1] == "undefined" 	|| rune[i-1][j] != 1) &&		//and none of these statements are true
					(typeof rune[i+1] == "undefined" 	|| rune[i+1][j] != 1) &&
					(typeof rune[i][j-1] == "undefined" || rune[i][j-1] != 1) &&
					(typeof rune[i][j+1] == "undefined" || rune[i][j+1] != 1) 				
					)

				){ rune[i][j] = 3};		
			
			};
		};
		
	
		
	//alert(rune_set.length+" - "+EdgesFilled(rune));	
	};
	

	
	return rune;	
	
};

function Cycle(){

	Eval();
	Selection();
	Crossover();
	
}

function Eval(){

};

/*
	here's the key of the process: the instance function!
	this one evaluates the quality of a rune
	
	possible qualifiers:
	- disqualifiable shapes:
		- number of circles (an "invalid" point surrounded by connection in all four sides)
		- number of "forks" next to each other (too many makes them invalid)
		- presence of noticeable shapes (numbers, letters)
	
	
	
*/
function Fitness(instance){

};

function Selection(){

};

function Crossover(){

};

function Mutation (){

};


//vizualization
function Draw(x, init, offset){

	var rune = rune_set[x+offset];
	var iDiv = 0;
	var xpos = Math.floor(x%cont_wd);
	var ypos = Math.floor(x/cont_wd);

	for(i=1;i<10;i++){
		for(j=1;j<10;j++){
			
			//are the divs initially created or it's just recoloring?
			if(init){

				//create a div and append it to the container IMMEDIATELY
				iDiv = document.createElement('div');
				document.getElementById('cont').appendChild(iDiv);
			
				iDiv.id = "inst_"+x+"_pixel_"+i+"_"+j;
				
				//style formatting			
				var wd = 1;
				var left_pos = (i*wd) + xpos*(wd*11);
				var top_pos = +(j*(wd*2.7)) + ypos*(wd*35);
				
				iDiv.style.width = wd+'%';
				iDiv.style['padding-bottom'] = wd+'%';
				
				iDiv.style.position='absolute';
				iDiv.style.left= left_pos+'%';
				iDiv.style.top= top_pos+'%';

			}else{
				iDiv = document.getElementById("inst_"+x+"_pixel_"+i+"_"+j);	
			};			

			switch(rune[i-1][j-1]){
				case 0: iDiv.style.backgroundColor = "#FFF8F8"; break;		//total invalid			
				case 1: iDiv.style.backgroundColor = "#000000"; break;		//connection
				case 2: iDiv.style.backgroundColor = "#ffffff"; break;		//connection placeholder
				case 3: iDiv.style.backgroundColor = "#1C2056"; break;		//node
				case 4: iDiv.style.backgroundColor = "#E3E3E3"; break;		//node plaholder

			};
			

		}; 
	};
	

	document.getElementById("fitness_display").innerHTML = 
	document.getElementById("fitness_display").innerHTML.concat((x+offset+1),": ",rune[9],"|   ");
	
	if (xpos == cont_wd-1){ 	
	document.getElementById("fitness_display").innerHTML = 
	document.getElementById("fitness_display").innerHTML.concat("<br>"); }
	
};


//misc
function Rerun(){

	rune_set = []; Init(poolsize);
	
	document.getElementById("fitness_display").innerHTML = ("Fitness values in selection:<br>");
	for (g=1;g<=cont_lng;g++){ Draw(g-1, false, 0)};

};

function ChooseRange(){
	
	offset_result = Number(document.getElementById("inst_range").value)*cont_wd;
	document.getElementById("range_value").innerHTML = "Choose region ("+offset_result +" - "+((cont_wd*cont_hg)+offset_result)+")";
	
	document.getElementById("fitness_display").innerHTML = ("Fitness values in selection:<br>");
	for (g=1;g<=cont_lng;g++){ Draw(g-1, false, offset_result)};
	
}

function SetHTML(){

	document.getElementById("inst_range").max = Math.floor((poolsize - (cont_wd*cont_hg))/cont_wd);
	offset_result = Number(document.getElementById("inst_range").value)*cont_wd;
	
};

//general functions
function randomINT(min, max){ return Math.floor(Math.random()*(max - min + 1)) + min};