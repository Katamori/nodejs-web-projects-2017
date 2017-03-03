/*

THESE ARE THE FUNCTIONS AND VARIABLES THAT
ARE IDENTICAL FOR EVERY LATER PROJECT

*/

var clientID = "yNYjIWhyLknNJA";
var clientSec = "VCO0U31qDisNKmEgBwJH8hxSZBQ";
var currentToken = "EMPTY YET";

//main chain
function Auth(callback){

  console.log("auth() called; currentToken is "+currentToken);

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


/*

    POTENTIAL CALLBACKS!

    Use these as params for function "Auth" for various desired effects

*/

//if you use this one, then the circle ends here, as I "outsource" the access token here
//maybe it's not the most secure method I could make
function saveToken(token){

    currentToken = token;

    console.log("afterAuth() called, current token looks like this: "+JSON.stringify(currentToken));

}
