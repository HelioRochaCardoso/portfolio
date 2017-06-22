$(document).ready(function() {
  var api_streams = "https://api.twitch.tv/kraken/streams/";
  var api_channels = "https://api.twitch.tv/kraken/channels/";
  var api_users = "https://api.twitch.tv/kraken/users/";
  var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
  var api_version = "&v5+json";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var user_call_stream, user_name, logo, url, game, bio, html_all;

  // for (var i = 0; i < users.length; i++) {
  //   api_streams = api_streams.concat(users[i] + "?client_id=" + client_id + api_version);
  //   api_channels = api_channels.concat(users[i] + "?client_id=" + client_id + api_version);
  //   api_users = api_users.concat(users[i] + "?client_id=" + client_id + api_version);
  // }
  //
  // $.getJSON(api_streams.concat(users[i] + "?client_id=" + client_id + api_version), function(data) {
  //   if (data.stream === null) {
  //     offline();
  //   } else if (data.stream !== null) {
  //     online();
  //   } else {
  //     show_all();
  //   }
  // });

  $("#all").on("click", function() {
    show_all();
  });

  $("#offline").on("click", function() {
    offline();
  });

  $("#online").on("click", function() {
    online();
  });

  function show_all() {
    $.getJSON(api_channels.concat(users[2] + "?client_id=" + client_id + api_version), function(data1) {
      user_name = data1.display_name;
      logo = data1.logo;
      url = data1.url;

      $("#users_offline").hide();
      $("#users_online").hide();

      html_all = "<div class='col-md-4 text-center' id='all_description'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li class='list-group-item' style='color: black'>" + user_name + "</li></a></ul></div>";

      $("#users_all").show().html(html_all);

      $.getJSON(api_users.concat(users[2] /* get all users */ + "?client_id=" + client_id + api_version), function(data_all) {
        bio = data_all.bio;

        $("#all_description").append(html_all.concat("<div class='col-md-8 text-center text-warning' style='line-height: 50px; background-color: grey'><p class='list-group-item-text' style='color: black; position: relative; top: 70px'>" + bio + "</p></div>"));
      });
    });
  }

  function offline() {
    $.get(api_streams.concat(users[3] + "?client_id=" + client_id + api_version), function(data2) {
      if (data2.stream === null) {
        $.getJSON(api_channels.concat(users[3] /* get all data2.streams with value null */ + "?client_id=" + client_id + api_version), function(data_offline) {
          var html = "";
          user_name = data_offline.display_name;
          logo = data_offline.logo;
          url = data_offline.url;

          $("#users_all").hide();
          $("#users_online").hide();

          html = "<div class='col-md-4 text-center'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li class='list-group-item'>" + user_name + "</li></a></ul></div><div class='col-md-8 text-center' style='position: relative; top: 70px'><p class='list-group-item-text text-info'>Currently Offline</p></div>";

          return $("#users_offline").show().html(html);
        });
      }
    });
  }

  function online() {
    $.getJSON(api_streams.concat(users[0] + "?client_id=" + client_id + api_version), function(data3) {
      if (data3.stream !== null) {
        $.getJSON(api_streams.concat(users[0] /* get all data4.stream without value null */ + "?client_id=" + client_id + api_version), function(data_online) {
          var html = "";
          user_name = data_online.stream.channel.display_name;
          logo = data_online.stream.channel.logo;
          url = data_online.stream.channel.url;
          game = data_online.stream.game;

          $("#users_all").hide();
          $("#users_offline").hide();

          html = "<div class='col-md-4 text-center'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li class='list-group-item'>" + user_name + "</li></a></ul></div><div class='col-md-8 text-center' style='position: relative; top: 70px'><p class='list-group-item-text text-info'>Currently playing <span class='text-success'><strong>" + game + "</strong></span></p></div>";

          return $("#users_online").show().html(html);
        });
      }
    });
  }

});
