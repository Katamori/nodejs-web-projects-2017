/*calendar options:
- BY: Beacon Year
- KW: Kvahk'er'Weplec
- RD: Republic Date
- RY: Resistance Year
- IC: Initial Contact
- CD: CyberDomini
- UD: Union Day

											THE DATE CALCULATOR

		this one converts a date of a certain calendar to another one

*/
var calendars = [
	["BY", "Beacon Year"],
	["KW", "Kvahk'er'Weplec"],
	["RD", "Republic Date"],
	["RY", "Resistance Year"],
	["IC", "Initial Contact"],
	["CD", "CyberDomini"],
	["UD", "Union Day"]
];

//the core
function convertDate(in_cal, in_date, out_cal){


	in_date = parseInt(in_date);
	var orig = in_date;

	//each number shows, when a certain calender started compared to the others
	//e.g. 563159 in BY equals to 1 in KW and 100325 in KW equals to 1 in RD
	var DateOrder =  [563159, 100325, 3426, 1406, 2036, 1042];
	var in_id = -1;
	var ou_id = -1;

	function MinorConvert(string){

		var output = -2;
		for(i=0;i<calendars.length;i++){ if(string==calendars[i][0]){ output = i-1 }}
		return output;

	}

	in_id = MinorConvert(in_cal);
	ou_id = MinorConvert(out_cal);

	//-2 serves as an error code
	//it was implemented, when "calendar" wasn't added yet, but I'm afraid to eliminate
	if (in_id > -2 && ou_id > -2){

		//if the calendars different, it iterates through the calendar array
		//if the calendars are identical, it doesn't change the input
		if (in_id != ou_id){
			if(in_id<ou_id)	     {	for(s=in_id;s<ou_id;s++){ in_date-= DateOrder[s+1]; }
				   						}else{	for(s=ou_id;s<in_id;s++){ in_date+= DateOrder[s+1]; }
			};
		};


	}else{ window.alert(in_cal + " to " + out_cal + " doesn't seem to be a valid conversation.") };


	//input is the returning value, either changed or unchanged (see comments at the condition above)
	return in_date;



}
