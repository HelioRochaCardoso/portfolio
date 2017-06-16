$(document).ready(function() {
  var api = "https://wind-bow.gomix.me/twitch-api/users/";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var user_call = "";

  users.forEach(function(user) {
    user_call = api.concat(user + "?callback=?");
    alert(user_call);
  });

  $("#btn").on("click", function() {
    $.ajax({
      type: "POST",
      url: api,
      dataType: "jsonp",
      success: function(data) {

      }
    });
  });

});
