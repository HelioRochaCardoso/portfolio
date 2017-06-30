$(document).ready(function() {
  var api_streams = "https://api.twitch.tv/kraken/streams/";
  var api_channels = "https://api.twitch.tv/kraken/channels/";
  var api_users = "https://api.twitch.tv/kraken/users/";
  var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
  var api_version = "&v5+json";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "hearthstonefr"];
  var user_call_stream, user_name, logo, url, game, bio, html_all, status, watching, followers, views;

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

  function showData(array, i) {
    array = users.length;
    if (array[i - 1] === 0) {
      return;
    }

    $("#all").on("click", function() {
      show_all(i);
      return showData(array, i - 1);
    });

    $("#offline").on("click", function() {
      offline(i);
      return showData(array, i - 1);
    });

    $("#online").on("click", function() {
      online(i);
      return showData(array - 1);
    });
  }

  function show_all(user) {
    $.get(api_channels.concat(user + "?client_id=" + client_id + api_version), function(data1) {
      user_name = data1.display_name;
      logo = data1.logo;
      url = data1.url;
      $.get(api_users.concat(user /* get all users */ + "?client_id=" + client_id + api_version), function(data_all) {
        bio = data_all.bio;

        $("#users_offline").hide();
        $("#users_online").hide();

        html_all = "<div class='col-md-4 text-center text-white' style='padding: 0'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img_size' src='" + logo + "'></li><li class='list-group-item bg-inverse'>" + user_name + "</li></a></ul></div><div class='col-md-8'><p class='list-group-item-text text-center text-justify text-black' style='position: relative; top: 40px'>" + bio + "</p></div>";

        return $("#users_all").show().html(html_all);
      });
    });
  }

  function offline(user) {
    $.get(api_streams.concat(user + "?client_id=" + client_id + api_version), function(data2) {
      if (data2.stream === null) {
        $.get(api_channels.concat(user /* get all data2.streams with value null */ + "?client_id=" + client_id + api_version), function(data_offline) {
          var html = "";
          user_name = data_offline.display_name;
          logo = data_offline.logo;
          url = data_offline.url;

          $("#users_all").hide();
          $("#users_online").hide();

          html = "<div class='col-md-4 text-white text-center' style='padding: 0'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img_size border-logo-offline' src='" + logo + "'></li><li class='list-group-item bg-warning'>" + user_name + "</li></a></ul></div><div class='col-md-8'><p class='list-group-item-text text-black text-center' style='position: relative; top: 70px'>Currently Offline</p></div>";

          return $("#users_offline").show().html(html);
        });
      }
    });
  }

  function online(user) {
    $.get(api_streams.concat(user + "?client_id=" + client_id + api_version), function(data3) {
      if (data3.stream !== null) {
        $.get(api_streams.concat(user /* get all data4.stream without value null */ + "?client_id=" + client_id + api_version), function(data_online) {
          var html = "";
          user_name = data_online.stream.channel.display_name;
          logo = data_online.stream.channel.logo;
          url = data_online.stream.channel.url;
          game = data_online.stream.game;
          status = data_online.stream.channel.status;
          watching = data_online.stream.viewers;
          followers = data_online.stream.channel.followers;
          views = data_online.stream.channel.views;

          $("#users_all").hide();
          $("#users_offline").hide();

          html = "<div class='col-md-4 text-white text-center' style='padding: 0'><ul class='list-group list-unstyled'><a href='" + url + "' target='_blank'><li class='list-group-item'><img class='img-responsive img-circle img_size border-logo-online' src='" + logo + "'></li><li class='list-group-item bg-success'>" + user_name + "</li></a></ul></div><div class='col-md-8 text-center'><ul class='list-group list-unstyled' style='height: 50px'><li class='list-group-item-text'><p class='text-black'>" + status + "</p></li><li class='list-group-item-text' style='position: relative; top: 30px'><p class='text-black'>Currently playing: <strong><span class='text-info'>" + game + "</span></strong></p></li></ul></div>";

          html += "<div class='row'><div class='col-md-4 text-center list-group-item-text'><p class='text-black'>Currently watching: <em class='text-info'>" + watching + "</em> <i class='fa fa-user fa-lg text-info' aria-hidden='true'></i></div><div class='col-md-4 text-center'><p class='text-black'>Followers: <em class='text-info'>" + followers + "</em> <i class='fa fa-users fa-lg text-info' aria-hidden='true'></i></p></div><div class='col-md-4 text-center'><p class='text-black'>Views: <em class='text-info'>" + views + "</em> <i class='fa fa-eye fa-lg text-info' aria-hidden='true'></i></p></div></div>";

          return $("#users_online").show().html(html);
        });
      }
    });
  }
});
