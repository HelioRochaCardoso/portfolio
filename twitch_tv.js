$(document).ready(function() {
  var api_streams = "https://api.twitch.tv/kraken/streams/";
  var api_channels = "https://api.twitch.tv/kraken/channels/";
  var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
  var api_version = "&v5+json";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var user_call_stream = "";
  var user_name;
  var logo;
  var url;
  var game;

  // for (var i = 0; i < users.length; i++) {
  //   user_call_stream = api_streams.concat(users[i] + "?client_id=" + client_id + api_version);
  // }

  $("#offline").on("click", function() {
    $.getJSON(api_streams.concat(users[3] + "?client_id=" + client_id + api_version), function(user_data) {
      if (user_data.stream === null) {
        offline();
      }
    });
  });

  $("#online").on("click", function() {
    $.getJSON(api_streams.concat(users[0] + "?client_id=" + client_id + api_version), function(user_data) {
      if (user_data.stream !== null) {
        online();
      }
    });
  });

  function offline() {
    $.getJSON(api_channels.concat(users[3] + "?client_id=" + client_id + api_version), function(data) {
      user_name = data.display_name;
      logo = data.logo;
      url = data.url;

      return $("#users_offline").html("<div class='col-md-6 text-center'><ul class='list-unstyled'><a href='" + url + "' target='_blank'><li><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li>" + user_name + "</li></a></ul></div><div class='col-md-6 text-center' style='line-height: px'><p>" + user_name + " is currently offline</p></div>");
    });
  }

  function online() {
    $.getJSON(api_streams.concat(users[0] + "?client_id=" + client_id + api_version), function(data) {
      user_name = data.channel.display_name;
      logo = data.stream.channel.logo;
      url = data.stream.channel.url;
      game = data.stream.game;

      $("#users_all").hide();
      $("#users_offline").hide();

      return $("#users_online").html("<div class='col-md-6 text-center'><ul class='list-unstyled'><a href='" + url + "' target='_blank'><li><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li>" + user_name + "</li></a></ul></div><div class='col-md-6 text-center' style='line-height: px'><p>Currently playing <span class='text-warning'><strong>" + game + "</strong></span></p></div>");
    });
  }

  function all() {
    $.getJSON(users[3], function(data) {
      if (data.stream === null) {
        user_name = data._links.channel.slice(38);
        console.log(user_name);
        return $("#users_offline").html("<ul class='list-unstyled'><li class='offline_color'>" + user_name + "</li></ul>");
      }
    });
  }

  // $.ajax({
  //   type: "POST",
  //   url: user_call,
  //   dataType: "jsonp",
  //   success: function(data) {
  //     if (data.stream === null) {
  //       var user_name = data._links.channel.slice(38);
  //       $("#users").html("<ul class='list-unstyled'><li class='offline_color'>" + user_name + "</li></ul>");
  //     } else {
  //       $("#users").html("<ul class='list-unstyled'><li class='online_color'>" + data.stream + "</li></ul>");
  //     }
  //   },
  //   error: function(xhr) {
  //     alert("Error " + xhr.status + "\nData not found.");
  //   }
  // });

});
