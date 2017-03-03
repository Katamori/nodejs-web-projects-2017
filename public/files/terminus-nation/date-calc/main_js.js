/*

Variables declared elsewhere:

calendars - convertdate.js


Functions declared elsewhere:

convertDate - convertdate.js

*/

//initialization
fillList("in_c");
fillList("ou_c");


//for select-list autocomplete
function fillList(id){

	//first already added, now add the rest
	for(i=0;i<calendars.length;i++){

		var option = document.createElement("option");
    option.value = calendars[i][0];
    option.text = calendars[i][1];
    document.getElementById(id).appendChild(option);
	}

}



//called by HTML
function convertDate_onClick(){

	var in_c =  document.getElementById("in_c").value;
	var in_d = document.getElementById("in_d").value;
	var ou_c = document.getElementById("ou_c").value;

	document.getElementById("result").innerHTML = in_d + " in " + in_c + " equals to " + convertDate(in_c, in_d, ou_c) + " in " + ou_c;



}
