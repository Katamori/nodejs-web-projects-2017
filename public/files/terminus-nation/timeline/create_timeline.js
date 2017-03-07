/*

Variables declared elsewhere:

calendars - convertdate.js
timelineJSON - timeline.js



Functions declared elsewhere:

convertDate - convertdate.js



Other things from outer source:

faction coloring - faction-colors.css

*/

 addBox();


//this one adds the divs themselves (with proper coloring)
function addBox(){


	for(num=0;num<timelineJSON.length-1;num++){

		var header = timelineJSON[num].context;

		if(timelineJSON[num].faction==""){ header = "general event, "+timelineJSON[num].context;
					    }else{ header = timelineJSON[num].faction+", "+timelineJSON[num].context;}


		//time-scaled sizes
		var diff =  	convertDate(timelineJSON[num+1].calendar, timelineJSON[num+1].year, "RD") -
						convertDate(timelineJSON[num+1].calendar, timelineJSON[num  ].year, "RD");

		var threshold = 10;

		//for making CSS nice and cute even in case of event within the same year
		if(diff==0){diff=1;};
		if(diff>threshold){diff=threshold;};

		/*
		appends an HTML to the 'timeline' table - it consists of:
		- a column that makes the side strip
		- a column for the data itself
		*/
		$( ".timeline" ).append("<tr id='eventno"+(num+1)+"'>"+
						"<td class='stripe "+selectColor(num)+"' id='stripe"+(num+1)+"'></td>"+
						"<td class='eventbox' style='padding-bottom: "+((diff-1)*80)+"px;'>"+
							"<p class='tag'>"+header+"</p>"+
							"<p class='content' id='content"+(num+1)+"'>Szoveg ide</p>"+
				 		"</td>"+
					"</tr>" );


		FormattedDate(num);
	}
}

/*calendar options:
- BY: Beacon Year
- KW: Kvahk'er'Weplec
- RD: Republic Date
- RY: Resistance Year
- IC: Initial Contact
- CD: CyberDomini
- UD: Union Day
*/

//this one does date formatting
function FormattedDate(eventid){

		var string = "";

		switch(timelineJSON[eventid].calendar) {
			case "BY": string = "BY " + timelineJSON[eventid].year; break;
			case "KW": string = "KW," + timelineJSON[eventid].year; break;
			case "RD": string = timelineJSON[eventid].year + ".R.D."; break;
			case "RY": string = "RY" + timelineJSON[eventid].year; break;
			case "IC": string = "IC" + timelineJSON[eventid].year; break;
			case "CD": string = [eventid].year + "CD" ; break;
			case "UD": string = [eventid].year + " of UD"; break;
			default:   output = -2; window.alert(string + " is not a valid calendar!")
		};

	//document.getElementById("stripe"+(eventid+1)).innerHTML = string;
	document.getElementById("content"+(eventid+1)).innerHTML = string+": "+timelineJSON[eventid].content;

}

//this one chooses the color of the boxes - return value is a CSS class of the corresponding race + faction
function selectColor(num){

	switch(timelineJSON[num].race){

		case "general": 		return "general";		break;
		case "Cloudan": 		return "cloudan"; 		break;
		case "Aurost": 			return "aurost"; 		break;
		case "Sun Serpent": 	return "sunserpent"; 	break;
		case "Shaper": 			return "shaper"; 		break;
		default: 				return "otheralien"; 	break;

		case "human":

			switch(timelineJSON[num].faction){

				case "Republic": 				return "republic"; 		break;
				case "Free Heaven Movement": 	return "freeheaven"; 	break;
				case "Starcloud Nation": 		return "starcloud"; 	break;
				case "Red Fist": 				return "redfist"; 		break;
				case "Justice Empire": 			return "justiceempire"; break;
				case "Church of the Cybergod": 	return "cybergod"; 		break;
				case "Future Empire": 			return "futureempire"; 	break;
				default: 						return "otherhuman"; 	break;
			}
		break;

		case "AI":

			switch(timelineJSON[num].faction){
				case "Anubis": 			return "anubis"; 		break;
				case "Dark Machine": 	return "darkmachine"; 	break;
			}
		break;


	};

}
