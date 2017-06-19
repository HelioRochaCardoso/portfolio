$(document).ready(function() {
  // user_call = api.concat(user + "?callback=?");
  // alert(user_call);

  $("#btn").on("click", function() {
    // var api = "https://wind-bow.gomix.me/twitch-api/users/";
    var api = "https://api.twitch.tv/kraken/";
    var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var user_call = "";
    users.forEach(function(user) {
      user_call = api.concat(user + "/twitch" /*?client_id=" + client_id + "?callback=?*/ );
      ajax();
    });

    function ajax() {
      $.ajax({
        type: "POST",
        url: user_call,
        headers: {
          "Client-ID": "7z9b84cn6ix9kei678z24y5rqhesi2"
        },
        dataType: "jsonp",
        success: function(data) {
          $("#inner_containner").html("<ul><li>" + data.display_name + "</li></ul>");
        },
        error: function(xhr) {
          alert("Error " + xhr.status);
        }
      });
    }
  });

});
