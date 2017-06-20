$(document).ready(function() {
  // user_call = api.concat(user + "?callback=?");
  // alert(user_call);

  $("#btn").on("click", function() {
    // var api = "https://wind-bow.gomix.me/twitch-api/users/";
    var api = "https://api.twitch.tv/kraken/streams/";
    var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
    var api_version = "&v5+json";
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var user_call = "";

    // users.forEach(function(user) {
    //   user_call = api.concat(user + "?client_id=" + client_id);
    //   ajax();
    // });

    // function ajax() {
    // users.forEach(function(user) {
    user_call = api.concat("freecodecamp" + "?client_id=" + client_id + api_version);
    console.log(user_call);

    $.ajax({
      type: "POST",
      url: user_call,
      dataType: "jsonp",
      success: function(data) {
        $("#users").html("<ul class='list-group'><a href='" + data._links.channel + "'><li class='list-group-item'>" + data.stream + "<br/>" + data._links.self + "</li></a></ul>");
      },
      error: function(xhr) {
        alert("Error " + xhr.status + "\nData not found.");
      }
    });
    // });
    // }
  });

});
