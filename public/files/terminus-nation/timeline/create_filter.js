createCheckboxList("race");
createCheckboxList("faction");
createCheckboxList("context");


//4: select all/none
function setCheckboxes(categ, value){
    console.log("i work at all");
    //$(categ).find('input[type=checkbox],select').each(function() { console.log(checked) })
}

//3: hide and show appropriate elements
function filterAll(){

    for(m=0;m<timelineJSON.length;m++){

        var dateBY = convertDate(timelineJSON[m].calendar, timelineJSON[m].year, "BY");
        //console.log(timelineJSON[m].calendar+", "+timelineJSON[m].date);

        if(
            dateBY >= Number(document.getElementById("age_min").value) &&
            dateBY <= Number(document.getElementById("age_max").value) &&
            $("#"+timelineJSON[m].race.replace(/\s/g, '')).is(':checked') &&
            $("#"+timelineJSON[m].faction.replace(/\s/g, '')).is(':checked') &&
            $("#"+timelineJSON[m].context.replace(/\s/g, '')).is(':checked')
        ){
            $("#eventno"+(m+1)).show();
        }else {
            $("#eventno"+(m+1)).hide();
        }


    }

}

//2: create a list of checkboxes for a div
function createCheckboxList(category){

    //append selector buttons
    $("#select_"+category).append(
        "<button type='button' onclick='setCheckboxes(#select_"+category+", true)'>Select all</button><br>"+
        "<button type='button' onclick='setCheckboxes(#select_"+category+", false)'>Select none</button><br>"+
        "<button type='button' onclick='setCheckboxes("+$("#select_"+category)+", false)'>i'm a toaster</button><br>"
    )

    //and the important part
    var tempList = createList(category);

    for(l=0;l<tempList.length;l++){
        var noSpace = tempList[l].replace(/\s/g, '');
        $("#select_"+category).append("<input type='checkbox' id='"+noSpace+"' checked>"+tempList[l]+"<br>")
    }

    $("#select_"+category).append("<br><br>");

}


//1: this function selects all the distinct elements from the timeline
//(note: itemname must be a string, with "" signs)
function createList(itemname){

    var interntalList = [];

    //do the first step, whatever is the case
    interntalList.push(timelineJSON[0][itemname]);

    //do for the rest
    for(m=1;m<timelineJSON.length;m++){

        var isUnique = true;

        for(z=0; (z<interntalList.length && isUnique); z++){
            isUnique = isUnique && (timelineJSON[m][itemname] != interntalList[z]);
        }

        if (isUnique){ interntalList.push(timelineJSON[m][itemname]) };


    }

    return interntalList;

}
