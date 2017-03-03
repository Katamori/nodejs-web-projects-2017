var clientID = "yNYjIWhyLknNJA";
var clientSec = "VCO0U31qDisNKmEgBwJH8hxSZBQ";

//HTML stuff

//disable reaccess
$("#btnfunc1").attr("disabled", "disabled");

$( "#getbtn" ).click(function() {
   $(this).attr("disabled", "disabled");
   $("#btnfunc1").removeAttr("disabled");

   Init(CallbackF);
});

//if you click on that button
function Init(callback){



  //Authorization to Reddit API
  $.ajax({
      type: 'POST',
      url: "https://www.reddit.com/api/v1/access_token",

      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(clientID + ":" + clientSec));
      },

      data:
        {
          grant_type: "client_credentials",
          user: clientID,
          password: clientSec
        },

      success: callback
  });
}

//EVERYTHING that happens only if you get access_token
//within the scope of this function, the input is that token
function CallbackF(token){

  $( "#btnfunc1" ).on( "click", function(){ Toplist(token)});

  console.log("In CallbackF, token is taken. " + typeof token.access_token)

  //main connection itself
  //note that it is defined within the callback
  function Toplist(response){

    console.log("In Toplist, token is taken. " + typeof response.access_token)

    $.ajax({
        type: 'GET',
        url: "https://oauth.reddit.com/r/mealtimevideos/top/",

        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", response.token_type + " " + response.access_token);
        },

        data: {
          t: "all",
          count:0,
          limit: 20,
          raw_json: 1
        },

        //lists out the thumbnails of the top vids
        success: function(querydat) {
          for(i=0;i<20;i++){
            if (querydat.data.children[i].data.domain == "youtube.com"){
              $( "<img src='"+querydat.data.children[i].data.media.oembed.thumbnail_url+"' height='360' width='640'>" ).appendTo( "body" );
            }
          }
        }
    });

  };


}
