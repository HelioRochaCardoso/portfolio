$(document).ready(function () {
    var api = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?";
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < users.length; i++) {
        var html = "";
        api = api.replace();
    }

    $("#btn").on("click", function() {
        $.ajax({
            type: "POST",
            url: api,
            dataType: "jsonp",
            success: function (data) {
              for (var i = 0; i < users.length; i++) {

              }
              $("#container1").html(data.bio);
              $("#container2").html(data.display_name);
              $("#container3").html(data._links.self);
            }
        });
    });

});
