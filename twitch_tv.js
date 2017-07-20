$(document).ready(function() {
  var api_streams = "https://api.twitch.tv/kraken/streams/";
  var api_channels = "https://api.twitch.tv/kraken/channels/";
  var api_users = "https://api.twitch.tv/kraken/users/";
  var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
  var api_version = "&v5+json";
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "hearthstonefr", "SevenS1ns"];
  var user_name, logo, url, game, bio, status, watching, followers, views;
  var on_off = true;

  show_all();

  function show_all() {
    if (on_off === true) {
      for (var i = 0; i < users.length; i++) {
        $.ajax({
          type: "GET",
          url: api_channels.concat(users[i]),
          headers: {
            "Client-ID": client_id
          },
          success: function(data1) {
            user_name = data1.display_name.slice(0, 1).toUpperCase() + data1.display_name.slice(1);
            logo = data1.logo;
            url = data1.url;
            status = data1.status;

            $("#show_online").html("");
            $("#show_offline").html("");

            logo === null ? logo = "https\://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;

            status === null ? status = "No status available" : status;

            var display_all = "<div class='row' style='padding-top: 25px'><div class='col-md-3'>" +
              "<img class='img-responsive img_circle img_size' style='background-color: transparent' src='" + logo + "'></div>" +
              "<div class='col-md-9'>" +
              "<p class='text-justify'><a href='" + url + "' target='_blank'>" + user_name + "</a></p>" +
              "<p class='text-success'><strong>Status:<strong> <span class='text-black'><em>" + status + "</em></span></p>" +
              "</div>" +
              "</div>" +
              "<hr style='width: 65%; border: 0.1em solid rgba(0,0,0,0.2); position: relative; left: 50px'>";

            $("#show_all").prepend(display_all);
            on_off = false;
          }
        });
      }
    }
  }

  function offline() {
    if (on_off === true) {
      for (var i = 0; i < users.length; i++) {
        $.ajax({
          type: "GET",
          url: api_streams.concat(users[i]),
          headers: {
            "Client-ID": client_id
          },
          success: function(data2) {
            var users2 = data2._links.self.slice(37);
            if (data2.stream === null) {
              $.ajax({
                type: "GET",
                url: api_channels.concat(users2),
                headers: {
                  "Client-ID": client_id
                },
                success: function(data_offline) {
                  user_name = data_offline.display_name.slice(0, 1).toUpperCase() + data_offline.display_name.slice(1);
                  logo = data_offline.logo;
                  url = data_offline.url;

                  logo === null ? logo = "https\://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;

                  $("#show_online").html("");
                  $("#show_all").html("");

                  var display_offline = "<div class='row' style='padding-top: 25px; margin: 0'><div class='col-md-3'>" +
                    "<img class='img-responsive img_circle img_size' style='background-color: transparent; border: 5px solid red' src='" + logo + "'></div>" +
                    "<div class='col-md-9'>" +
                    "<p class='text-justify text-black'><a href='" + url + "' target='_blank'>" + user_name + "</a></p>" +
                    "<p class='text-black' style='position: relative; top: 20px'><strong>Currently</strong> <span style='color: red'><strong><em>Offline</em></strong></span></p>" +
                    "</div>" +
                    "</div>" +
                    "<hr style='width: 50%; border: 0.1em solid rgba(0,0,0,0.2); position: relative; left: 10px'>";

                  $("#show_offline").prepend(display_offline);
                  on_off = false;
                }
              });
            }
          }
        });
      }
    }
  }

  function online() {
    if (on_off === false) {
      for (var i = 0; i < users.length; i++) {
        $.ajax({
          type: "GET",
          url: api_streams.concat(users[i]),
          headers: {
            "Client-ID": client_id
          },
          success: function(data_online) {
            if (data_online.stream !== null) {
              user_name = data_online.stream.channel.display_name.slice(0, 1).toUpperCase() + data_online.stream.channel.display_name.slice(1);
              logo = data_online.stream.channel.logo;
              url = data_online.stream.channel.url;
              game = data_online.stream.game;
              watching = data_online.stream.viewers;
              followers = data_online.stream.channel.followers;
              views = data_online.stream.channel.views;

              $("#show_all").html("");
              $("#show_offline").html("");

              // if number has at least 4 digits, use a comma to separate every 3 digits
              watching.toString().length > 3 ? watching = watching.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
              followers.toString().length > 3 ? followers = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
              views.toString().length > 3 ? views = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
              logo === null ? logo = "https\://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;

              var display_online = "<div class='row' style='padding-top: 35px; padding-left: 10px'>" +
                "<div class='col-md-3 text-center' style='padding-top: 15px'>" +
                "<img class='img-responsive img_circle img_size border-logo-online' style='background-color: transparent; position: relative; bottom: 5px' src='" + logo + "'>" +
                "</div>" +
                "<div class='col-md-9'>" +
                "<p class='text-justify text-center text-info'>" + user_name + "</p>" +
                "<p class='text-black'><span class='text-success'><strong>Currently playing:</strong></span> <em><a href='" + url + "' target='_blank'><strong><em><span class='text-info'>" + game + "</span></em></strong></a></p>" +
                "<div class='row text-left' style='position: relative; top: 10px'>" +
                "<div class='col-md-4'>" +
                "<div>" +
                "<p class='text-black text-center'>Now watching</p>" +
                "<p class='text-center'><em class='text-success'>" + watching + "</em> <i class='fa fa-user fa-lg text-info' aria-hidden='true'></i></p>" +
                "</div>" +
                "</div>" +
                "<div class='col-md-4'>" +
                "<div>" +
                "<p class='text-black text-center'>Followers</p>" +
                "<p class='text-center'><em class='text-success'>" + followers + "</em> <i class='fa fa-users fa-lg text-info' aria-hidden='true'></i></p>" +
                "</div>" +
                "</div>" +
                "<div class='col-md-4'>" +
                "<div>" +
                "<p class='text-black text-center'>Total Views</p>" +
                "<p class='text-center'><em class='text-success'>" + views + "</em> <i class='fa fa-eye fa-lg text-info' aria-hidden='true'></i></p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<hr style='width: 70%; border: 0.1em solid rgba(0,0,0,0.2); position: relative; left: 75px'>";

              $("#show_online").prepend(display_online);
              on_off = true;
            }
          }
        });
      }
    }
  }

  $("#all").on("click", function() {
    show_all();
  });

  $("#offline").on("click", function() {
    offline();
  });

  $("#online").on("click", function() {
    online();
  });

});
