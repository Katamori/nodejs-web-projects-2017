

var repeat = 2;                            //how many seconds should "coreProcess" wait before sending the next query?

var sections = [];


var treshold = 4;                           //the minimal change in readers to show; 0 means no filtering


var reportFrequency = repeat*2;             //a multiplicator or "repeat", used in "reports_" table

var repFreqMax = 1800/(repeat/2);          /* because "currentToken.expires_in" acts here as a countdown-clock,
                                            and because it's a sub-operation of "repeat actions",
                                            the variable "reportFrequency" wouldn't behave properly
                                            if it exceeds 3600. But it wouldn't make sense above 1800
                                            either, so I use this small supplementary variable to
                                            give it a limit.   */
if( reportFrequency > repFreqMax ){
    reportFrequency = repFreqMax };

var lastRemainder = 3600-((Math.floor(3600/repeat)*repeat));


function Section(subreddit) {

    var self = this;        //magic from Stack Overflow: http://stackoverflow.com/a/20279485/2320153

    this.subreddit = subreddit;

    this.values = [{"reader": 0, "time": Date.now(), "timeObj": new Date(Date.now()) }];

    //previous queried and previous outputted
    this.previous = 0;
    this.previousReported = 0;

    this.placeholder = "wait..."

    $("#section_base").append(
        "<div class='section'>"+
            "<p>"+self.subreddit+"</p><br><br>"+
            "<p class='highlight' id='current_"+self.subreddit+"'>"+this.placeholder+"</p>"+
            "<br><br>"+
            "<table id='reports_"+self.subreddit+"'></table>"+

            /*"<p class='section_date'>Started at "+Date(self.initVal.time).toString()+"</p>"+*/
        "</div>"


    )





    this.updateMe = function(access_token){
	
 	    var link = "https://oauth.reddit.com/r/"+self.subreddit+"/about"

            $.ajax({
                type: 'GET',
                url: link,

		crossDomain: true,
    		//dataType:'jsonp',

                beforeSend: function(xhr) {
                	xhr.setRequestHeader("Authorization", access_token.token_type + " " + access_token.access_token);
                	//xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
                },

                success: function (querydat){
                    //console.log(querydat);


                    //if it's the first time
                    if($("#current_"+self.subreddit).text() == self.placeholder){

                        //save the initial data, and write it out to the table
                        self.values[0].reader = querydat.data.subscribers;

                        $("#reports_"+self.subreddit).append(
                            "<tr>"+
                                "<td>"+self.values[0].reader+"</td>"+
                                "<td>"+shortDate(self.values[0].timeObj)+"</td>"+
                            "</tr>"
                        )

                        self.previousReported = querydat.data.subscribers;

                        //definitely resolve this state eventually
                        $("#current_"+self.subreddit).text(querydat.data.subscribers+" readers");
                        $("#lastUpdate").text("Last update: "+Date(querydat.data.created).toString());

                    //otherwise
                    }else{


                        //only if the counter increases
                        if(querydat.data.subscribers > self.previous){

                            //choose your destiny
                            $("#current_"+self.subreddit).text(querydat.data.subscribers+" readers");
                            //document.getElementById("current_"+self.subreddit).innerHTML = querydat.data.subscribers;

                            //miscellaneous
                            $("#lastUpdate").text("Last update: "+Date(querydat.data.created).toString());
                            $("#lastCheck").text("Last check: "+Date(querydat.data.created).toString());

                            /*
                            console.log(self.subreddit+": "+
                            (querydat.data.subscribers - self.previous)
                            +" at "+Date(querydat.data.created).toString());*/

                            //reportFrequency "has its turn"
                            if(querydat.data.subscribers > self.previousReported + treshold){

                                //console.log("!");

                                //save the current state
                                self.values.push({  "reader": querydat.data.subscribers,
                                                    "time": Date.now(),
                                                    "timeObj": new Date(Date.now())
                                                });


                                //leave cell blank in case of redundant valuess
                                var cond = 0;

                                if (querydat.data.subscribers == self.previousReported)
                                    { cond = " " }
                                else{ cond = querydat.data.subscribers }

                                //add to the table
                                $("#reports_"+self.subreddit).append(
                                    "<tr>"+
                                        "<td>"+self.values[self.values.length-1].reader+"</td>"+
                                        "<td>"+shortDate(self.values[self.values.length-1].timeObj)+"</td>"+
                                    "</tr>"
                                );

                                //memorize it
                                self.previousReported = querydat.data.subscribers;

                            }

                            self.previous = querydat.data.subscribers;

                        };





                    }

                    //do the thing where it doesn't matter at all:
                    $("#lastCheck").text("Last check: "+Date(querydat.data.created).toString());

                    self.previous = querydat.data.subscribers;


                }

            });



    };

}


/* actual events */



//sections.push(new Section("onepiece"))
//sections.push(new Section("worldbuilding"))
//sections.push(new Section("changemyview"))
//sections.push(new Section("doom"))
//sections.push(new Section("fuckthealtright"))
//sections.push(new Section("evilbuildings"))
//sections.push(new Section("askhistorians"))
//sections.push(new Section("bindingofisaac"))
//sections.push(new Section("rimworld"))
//sections.push(new Section("getmotivated"))
sections.push(new Section("breathinginformation"))

//initial authentication
Auth(saveToken);


coreProcess(repeat);





/* function declarations */

function coreProcess(frequency){

    setInterval(
        function(){


            /*
                "frequency" parameter is in seconds

                if it's set too small, I won't allow repeated runs
                because Reddit API rules allow 30 requests per minute

                also, setInterval part is supported by Javascript magic
                from Stack Overflow: http://stackoverflow.com/a/7749123/2320153

                UPDATE: as it's not within a callback anymore, I'm a bit unsure
                if the magic is necessary - or even works at all...we'll see

                UPDATE 2: yup, it resulted in recursion.
                (function(p) { setInterval(function() { sections[p].updateMe(currentToken) }, frequency*1000)})(p)
            */

            for(p=0; p<sections.length; p++){

                if(frequency<2) {
                    console.log("You're doing that too much!!!");
                }else{
                    sections[p].updateMe(currentToken);
                };
            }

            //moreover: it's vital to track the time necessary before refresh happens
            currentToken.expires_in -= frequency;


            /*
            floor of 3600/frequency is the number of queries within expire time

            by multiplicating back and then extracting this value from 3600,
            you get, how many seconds remain from the expire time when the
            last possible query happens
            */
            lastRemainder = 3600-((Math.floor(3600/frequency)*frequency));

            if(currentToken.expires_in == lastRemainder ){ Auth(saveToken) }

            //console.log(currentToken.expires_in+"|"+lastRemainder);

        }

    , frequency*1000)

}

function shortDate(date){

    var r = "r";
    var ho = date.getHours();
    var mi = date.getMinutes();

    function addZero(i){ if(i<10){ return "0"+i }else{ return i } }

    r = addZero(ho)+":"+addZero(mi);
    return r;
    //console.log(r);


}
