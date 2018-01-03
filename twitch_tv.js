// "use strict";
/* eslint-env jquery */
$(document).ready(function() {
    var api_streams = "https://api.twitch.tv/kraken/streams/";
    var api_channels = "https://api.twitch.tv/kraken/channels/";
    // var api_users = "https://api.twitch.tv/kraken/users/";
    var client_id = "7z9b84cn6ix9kei678z24y5rqhesi2";
    // var api_version = "&v5+json";
    // add user TugaPS4 PESEPLive
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "hearthstonefr", "SevenS1ns", "TugaPS4", "PESEPLive"];
    var user_name, logo, url, game, status, watching, followers, views, display_all, display_offline, display_online;
    // var on_off;

    show_all();

    function show_all() {
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
                    // assign standard picture if user has no logo
                    logo === null ? logo = "https//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;
                    // assign standard status message if user has no status set
                    status === null ? status = "No status available" : status;

                    display_all = "<div class='row' style='padding-top: 1.5em'><div class='col-lg-3 col-md-3 col-xs-4'>" +
                        "<img class='img-responsive img_size' style='background-color: transparent' src='" + logo + "'></div>" +
                        "<div class='col-lg-9 col-md-9 col-xs-8' style='width: 65%; padding: 0'>" +
                        "<p><a href='" + url + "' target='_blank'>" + user_name + "</a></p>" +
                        "<p class='text-success'><strong>Status:<strong> <span class='text-black'><em>" + status + "</em></span></p>" +
                        "</div>" +
                        "</div>" +
                        "<hr>";

                    $("#show_all").prepend(display_all);
                }
            });
        }
    }

    function offline() {
        for (var i = 0; i < users.length; i++) {
            $.ajax({
                type: "GET",
                url: api_streams.concat(users[i]),
                headers: {
                    "Client-ID": client_id
                },
                success: function(data2) {
                    var users2 = data2._links.self.slice(37);
                    // if stream is null, user is offline
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

                                logo === null ? logo = "https//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;

                                $("#show_online").html("");
                                $("#show_all").html("");

                                display_offline = "<div class='row' style='padding-top: 1.5em'><div class='col-lg-3 col-md-3 col-xs-4'>" +
                                    "<img class='img-responsive img_size' style='background-color: transparent; border: 0.5em solid red' src='" + logo + "'></div>" +
                                    "<div class='col-lg-9 col-md-9 col-xs-8'>" +
                                    "<p class='text-justify text-black'><a href='" + url + "' target='_blank'>" + user_name + "</a></p>" +
                                    "<p class='text-black' style='position: relative; top: 1.2em'><strong>Currently</strong> <span style='color: red'><strong><em>Offline</em></strong></span></p>" +
                                    "</div>" +
                                    "</div>" +
                                    "<hr>";

                                $("#show_offline").prepend(display_offline);
                            }
                        });
                    }
                }
            });
        }
    }

    function online() {
        for (var i = 0; i < users.length; i++) {
            $.ajax({
                type: "GET",
                url: api_streams.concat(users[i]),
                headers: {
                    "Client-ID": client_id
                },
                success: function(data_online) {
                    // if stream is not null, user is online
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
                        logo === null ? logo = "https//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF" : logo;

                        display_online = "<div class='row' style='padding-top: 1.5em'>" +
                            "<div class='col-lg-3 col-md-3 col-xs-4 text-center'>" +
                            "<img class='img-responsive img_size border-logo-online' style='background-color: transparent' src='" + logo + "'>" +
                            "</div>" +
                            "<div class='col-lg-9 col-md-9 col-xs-8'>" +
                            "<p class='text-justify text-center text-info'>" + user_name + "</p>" +
                            "<p class='text-black'><span class='text-success'><strong>Currently playing:</strong></span> <em><a href='" + url + "' target='_blank'><strong><em><span class='text-info'>" + game + "</span></em></strong></a></p>" +
                            "<div class='row text-left' style='position: relative; top: 1em; left: -1.3em'>" +
                            "<div class='col-lg-4 col-md-4 col-xs-4'>" +
                            "<div>" +
                            "<p class='text-black text-center'>Now watching</p>" +
                            "<p class='text-center'><em class='text-success'>" + watching + "</em> <i class='fa fa-user fa-lg text-info' aria-hidden='true'></i></p>" +
                            "</div>" +
                            "</div>" +
                            "<div class='col-lg-4 col-md-4 col-xs-4'>" +
                            "<div>" +
                            "<p class='text-black text-center'>Followers</p>" +
                            "<p class='text-center'><em class='text-success'>" + followers + "</em> <i class='fa fa-users fa-lg text-info' aria-hidden='true'></i></p>" +
                            "</div>" +
                            "</div>" +
                            "<div class='col-lg-4 col-md-4 col-xs-4'>" +
                            "<div>" +
                            "<p class='text-black text-center'>Total Views</p>" +
                            "<p class='text-center'><em class='text-success'>" + views + "</em> <i class='fa fa-eye fa-lg text-info' aria-hidden='true'></i></p>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "<hr>";

                        $("#show_online").prepend(display_online);
                    }
                }
            });
        }
    }

    $("#all").on("click", function() {
        if ($(window).width() > 900 || $(document).width() > 900) {
            $(".status").removeClass('active');
            $(this).addClass("active");
            // online and/or offlinebackground disappears
            $("#online").removeClass("online-background")
            $("#offline").removeClass("offline-background");
        } else if ($(window).width() < 500 || $(document).width() < 500) {
            $(".status").removeClass("activate status");
            $("#online").removeClass("activate");
            $("#offline").removeClass("activate");
            $(this).addClass("activate");
        }
        show_all();
    });

    // add active class
    $("#offline").on("click", function() {
        if ($(window).width() > 900 || $(document).width() > 900) {
            $(".status").removeClass('active');
            // online background disappears
            $("#online").removeClass("online-background");
            $(this).addClass("active offline-background");
        } else if ($(window).width() < 500 || $(document).width() < 500) {
            $(".status").removeClass("activate status");
            $("#all").removeClass("activate");
            $("#online").removeClass("activate");
            $(this).addClass("activate");
            $("hr").css({
                "position": "relative",
                "left": "20em"
            });
        }
        offline();
    });

    // add active class
    $("#online").on("click", function() {
        if ($(window).width() > 900 || $(document).width() > 900) {
            $(".status").removeClass("active");
            // offline background disappears
            $("#offline").removeClass("offline-background");
            $(this).addClass("active online-background");
        } else if ($(window).width() < 500 || $(document).width() < 500) {
            $(".status").removeClass("activate status");
            $("#all").removeClass("activate");
            $("#offline").removeClass("activate");
            $(this).addClass("activate");
            $("hr").css({
                "position": "relative",
                "left": "2em"
            });
        }
        online();
    });
});