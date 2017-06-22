$(document).ready(function() {
  $("#all").css("", "");
  var api_streams = "https://api.twitch.tv/kraken/streams/";
  var api_channels = "https://api.twitch.tv/kraken/channels/";
  var api_users = "https://api.twitch.tv/kraken/users/";
  var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
  var api_version = "&v5+json";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var user_call_stream = "";
  var user_name;
  var logo;
  var url;
  var game;
  var bio;

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
    show_offline();
  });

  $("#online").on("click", function() {
    show_online();
  });

  // function show_all() {
  //   $.getJSON(api_channels.concat(users[i] + "?client_id=" + client_id + api_version), function(data1) {
  //     var html = "";
  //     user_name = data1.display_name;
  //     logo = data1.logo;
  //     url = data1.url;
  //
  //     // $("#users_all").html().hide();
  //     // $("#users_online").html().hide();
  //
  //     html = "<div class='col-md-6 text-center' id='all_description'><ul class='list-unstyled'><a href='" + url + "' target='_blank'><li><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li>" + user_name + "</li></a></ul></div>";
  //
  //     $("#users_all").html(html);
  //
  //     $.getJSON(api_users.concat(users[3] /* get all users */ + "?client_id=" + client_id + api_version), function(data2) {
  //       bio = data2.bio;
  //       $("#all_description").html(html.concat("<div class='col-md-6 text-center' style='line-height: 10px'><p>" + bio + "</p></div>"));
  //     });
  //   });
  // }

  function show_offline() {
    $.getJSON(api_streams.concat(users[3] + "?client_id=" + client_id + api_version), function(data3) {
      if (data3.stream === null) {
        $.getJSON(api_channels.concat(users[3] /* get all streams with value null */ + "?client_id=" + client_id + api_version), function(data_offline) {
          var html = "";
          user_name = data_offline.display_name;
          logo = data_offline.logo;
          url = data_offline.url;

          // $("#users_all").html().hide();
          // $("#users_online").html().hide();

          html = "<div class='col-md-6 text-center'><ul class='list-unstyled'><a href='" + url + "' target='_blank'><li><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li>" + user_name + "</li></a></ul></div><div class='col-md-6 text-center' style='line-height: px'><p>" + user_name + " is currently offline</p></div>";

          return $("#users_offline").html(html);
        });
      }
    });
  }

  function show_online() {
    $.getJSON(api_streams.concat(users[0] + "?client_id=" + client_id + api_version), function(data4) {
      if (data4.stream !== null) {
        $.getJSON(api_streams.concat(users[0] /* get all streams without value null */ + "?client_id=" + client_id + api_version), function(data_online) {
          var html = "";
          user_name = data_online.channel.display_name;
          logo = data_online.stream.channel.logo;
          url = data_online.stream.channel.url;
          game = data_online.stream.game;

          // $("#users_all").html().hide();
          // $("#users_offline").html().hide();

          html = "<div class='col-md-6 text-center'><ul class='list-unstyled'><a href='" + url + "' target='_blank'><li><img class='img-responsive img-circle img-size-height' src='" + logo + "'></li><li>" + user_name + "</li></a></ul></div><div class='col-md-6 text-center' style='line-height: px'><p>Currently playing <span class='text-warning'><strong>" + game + "</strong></span></p></div>";

          return $("#users_online").html(html);
        });
      }
    });
  }

});
