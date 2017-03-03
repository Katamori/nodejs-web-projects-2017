/*                            variables

until anything else happening in run.js (or here, but here shouldn't)
these variables are unchanged
*/

var params = {
    "listing": {
                  after: "",
                  count:0,
                  limit: 100,
                  //raw_json: 1
                },

    "recommend": {
                    omit: "",
                    over_18: true,
                    //srnames: "worldbuilding"
                }
};

var list = ["hot", "new", "top", "controversial"];
var APIurl = "https://oauth.reddit.com/r/all/hot";

//how many seconds should afterAuth wait to repeat the inteded function?
var repeat = 3;

var ids = [];












/*                            functions                             */



//this is the authentication's callback, this is the actual stuff happening
function afterAuth(token){

    console.log("afterAuth: "+JSON.stringify(token));



    //if repeat is set too small, I won't allow repeated runs
    //Reddit API rules allow 30 requests per minute
    if(repeat<2){
        accessAPI(token, rAllFeed, params.listing, APIurl);
    }else{
        setInterval(
            function(){
                accessAPI(token, rAllFeed, params.listing, APIurl) },
            repeat*1000)
    };


}


//standardized Reddit API access
//repeat parameter is in seconds
function accessAPI(access_token, callback, inputJSON, url){


    //console.log("sending request...");

    $.ajax({
        type: 'GET',
        url: url,

        beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", access_token.token_type + " " + access_token.access_token);
        },

        data: inputJSON,

        success: callback
    })




};






//custom-flavored Reddit functions
function printResult(querydat){
  //console.log(querydat);
}


function listThumnail(querydat) {

  for(i=0;i<20;i++){
    if (querydat.data.children[i].data.domain == "youtube.com"){
      $( "<img src='"+querydat.data.children[i].data.media.oembed.thumbnail_url+"' height='360' width='640'>" ).appendTo( "body" );
    }
  }

}

function rAllFeed(querydat){

  //console.log(querydat.data.children.length + " new entries added.");
  //console.log(querydat);






    //repeat for every query result
    for(i=querydat.data.children.length-1;i>=0;i--){

        var postData = querydat.data.children[i].data;

        //check for duplicates
        var exists = false;

        for(j=0;j<ids.length;j++){
            exists = exists || (postData.id == ids[j]);

            //if(querydat.data.children[i].data.id == ids[j]){ console.log(querydat.data.children[i].data.id+" == "+ids[j]) };
        }

        if(exists){//console.log(i+" is duplicate!")

        }else{

                    //otherwise do the job
                    ids.push(postData.id);

                    var date = Date(postData.created_utc);



                    var row =
                    "<tr>"+
                        "<td>"+
                            "<a href='"+postData.url+"'>"+postData.title+"</a>"+
                        "</td>"+
                        "<td>"+postData.subreddit+"</td>"+
                        "<td>"+postData.author+"</td>"+
                        "<td class='date'>"+date.toString()+" </td>"

                    +"</tr>"

                    $("#main tr:first").after(row);

                }

                //params.listing.after = "t3_"+querydat.data.children[0].data.id;

        };


        //example for debugging
        //console.log(querydat.data.children[0]);


}
