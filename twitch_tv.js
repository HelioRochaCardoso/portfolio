// "use strict";
/* eslint-env jquery */
$(document).ready(function() {
    const twitch_url = "https://www.twitch.tv/", // example => curl -H 'Client-ID: 7z9b84cn6ix9kei678z24y5rqhesi2' -X GET 'https://api.twitch.tv/helix/users?login=ESL_SC2'
        helix_users = "https://api.twitch.tv/helix/users?", // GET https://api.twitch.tv/helix/users?login=<user Name>
        helix_streams = "https://api.twitch.tv/helix/streams?", // GET https://api.twitch.tv/helix/streams?user_login=<user Name>
        helix_follows = "https://api.twitch.tv/helix/users/follows?to_id=", // GET https://api.twitch.tv/helix/users/follows?to_id=<user ID>
        helix_videos = "https://api.twitch.tv/helix/videos?", // GET https://api.twitch.tv/helix/videos?user_id=<user ID> OR game_id=<game ID>
        helix_games = "https://api.twitch.tv/helix/games?id=", // GET https://api.twitch.tv/helix/games?id=<game ID>
        client_id = "7z9b84cn6ix9kei678z24y5rqhesi2",
        users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "hearthstonefr", "SevenS1ns", "TugaPS4", "PESEPLive", "esl_csgo"];

    let doc_w = document.body.clientWidth,
        window_s_w = window.screen.width,
        microbrowser = false,
        small_window_style = "position:relative;top:2em;left:-100px;width:170%;",
        small_div_style = "position:relative;left:-10px;",
        small_div_style2 = "border:0;margin:o;padding:0;",
        desc_truncate = 100,
        style_bottom_left = "position:absolute;bottom:0;right:15px;",
        rel_pos = "position:relative;";

    doc_w <= 500 || window_s_w <= 500 ? microbrowser = true : microbrowser = false;

    let d = new Date(),
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month = monthNames[d.getMonth()],
        curr_month = d.getMonth() + 1,
        day = d.getDate(),
        weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        week_day = weekDays[d.getDay()],
        full_date = week_day + ", " + day + " " + month;

    if (day <= 9) day = ("0" + day);
    if (curr_month <= 9) curr_month = ("0" + curr_month);

    $("#menu").prepend("<div class='text-center'>" + full_date + "</div>");

    ajaxCall("show_all");

    function ajaxCall(display_mode, arr_users = users, query_param = "login=", version = helix_users) {
        let url, mode;

        if (display_mode.indexOf("followers") > -1) {
            mode = "follow";
        }
        if (display_mode.indexOf("game") > -1) {
            mode = "game";
        }

        if (mode) {
            if (mode == "follow") {
                url = helix_follows + display_mode.slice(display_mode.lastIndexOf("_") + 1);
            } else {
                url = helix_games + display_mode.slice(display_mode.lastIndexOf("_") + 1);
            }
        } else {
            url = queryString(display_mode, version, arr_users, query_param);
        }

        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            contentType: "application/json",
            headers: {
                "Client-ID": client_id
            },
            error: function(xhr) {
                let errorMessage = xhr.status + ': ' + xhr.statusText;
                alert('Error - ' + errorMessage + " => AJAX call for " + display_mode + " not successful!");
                return;
            },
            success: function(response) {
                if (mode) {
                    if (mode == "follow") {
                        console.log(JSON.stringify(response.total));
                        return response.total;
                    } else {
                        console.log(JSON.stringify(response));
                        return response;
                    }
                } else
                    getApiResponse(response, display_mode);
            }
        });
    }

    function queryString(mode, api_url, arr_users, q_param) {
        if (mode == "show_online") {
            q_param = "user_login=";
            api_url = helix_streams;
            arr_users.forEach(function(el) {
                if (arr_users.indexOf(el) !== (arr_users.length - 1)) {
                    api_url += q_param + el + "&";
                } else {
                    api_url += (q_param + el);
                }
            });
            return api_url;
        }

        arr_users.forEach(function(el) {
            if (arr_users.indexOf(el) !== (arr_users.length - 1)) {
                api_url += q_param + el + "&";
            } else {
                api_url += (q_param + el);
            }
        });

        return api_url;
    }

    function getApiResponse(api_response, display) {
        switch (display) {
            case "show_online":
                let on_data = api_response.data,
                    obj_live_users = { data: [] };
                for (let elem of on_data) {
                    if (elem.type) obj_live_users.data.push(elem);
                }

                display_online(obj_live_users);
                break;
            default:
                display_all(api_response);
        }
    }

    function display_all(response) {
        let display_all_html = "",
            content = response.data;

        content.forEach(function(user_obj) {
            let user_idx = content.indexOf(user_obj),
                user_name = user_obj.display_name,
                logo = user_obj.profile_image_url,
                user_url = twitch_url + user_obj.login,
                description = user_obj.description,
                total_views = user_obj.view_count;
            if (total_views.toString().length > 3) total_views = total_views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let arr_elems = [user_name, logo, user_url, description];

            // arr_elems.every(function(elem) { if (elem === undefined) return; });

            // assign standard logo if user has no logo
            if (logo === "") logo = "https//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy04kZumT1pU29S8uAUO9yrge0scZcDSyBZIoYRnnFWvcVwXF";
            if (description.length >= desc_truncate) description = description.slice(0, desc_truncate) + "...";

            display_all_html += "<div id='user_" + user_idx + "' style='" + rel_pos + "'>";
            display_all_html += "<div class='row'>";
            display_all_html += "<div class='col-lg-4 col-md-4 col-xs-4'>";
            display_all_html += "<a href='" + user_url + "' target='_blank'><img title='" + user_name + "' alt='" + user_name + "' class='img-responsive img_size' src='" + logo + "'></a>";
            display_all_html += "<br><p class='text-center'><a href='" + user_url + "' target='_blank'><strong>" + user_name + "</strong></a></p>";
            display_all_html += "</div>";
            display_all_html += "<div class='col-lg-8 col-md-8 col-xs-8'>";
            display_all_html += "<p><strong><em>" + description + "</em></strong></p>";
            display_all_html += "</div>";
            display_all_html += "</div>";
            display_all_html += "<p title='Total Views' style='" + style_bottom_left + "'><i class='fa fa-eye fa-lg text-info' aria-hidden='true'></i>&nbsp" + total_views + "</p>";
            display_all_html += "</div>";
            display_all_html += "<hr>";

            $("#users").html(display_all_html);
        });
    }

    function display_online(response) {
        let display_online_html = "",
            content = response.data;

        content.forEach(function(user_obj) {
            let user_idx = content.indexOf(user_obj),
                user_name = user_obj.user_name,
                game = ajaxCall("game_" + user_obj.game_id),
                followers = ajaxCall("followers_" + user_obj.user_id),
                user_url = twitch_url + user_name.toLowerCase(),
                title = user_obj.title,
                viewer_count = user_obj.viewer_count,
                started_at = user_obj.started_at,
                language = user_obj.language,
                thumbnail_url = user_obj.thumbnail_url,
                arr_langs = { "en": ["english", "images/twitch_images/england.svg"], "fr": ["french", "images/twitch_images/france.svg"], "pt": ["portuguese", "images/twitch_images/portugal.svg"], "sp": ["spanish", "images/twitch_images/spain.svg"], "it": ["italian", "images/twitch_images/italy.svg"], "ru": ["russian", "images/twitch_images/russia.svg"], "ch": ["mandarin", "images/twitch_images/china.svg"] },
                s_time = started_at.slice(started_at.indexOf("T") + 1, started_at.indexOf("T") + 6),
                s_date = started_at.slice(0, started_at.indexOf("T"));
            s_date = s_date.replace(/-/g, "/");
            thumbnail_url = thumbnail_url.replace("{width}x{height}", "50x50");
            let str_start = s_date + " at " + s_time,
                d_today = d.getFullYear() + "/" + curr_month + "/" + day,
                d_today_short = d_today.slice(0, d_today.lastIndexOf("/")),
                s_date_short = s_date.slice(0, s_date.lastIndexOf("/"));
            if (d_today == s_date) str_start = "Today at " + s_time;
            if ((d_today_short == s_date_short) && (parseInt(day) - parseInt(s_date.slice(8)) == 1)) str_start = "Yesterday at " + s_time;

            for (let i in arr_langs)
                if (i === language) language = arr_langs[i];

                // if number > 4 digits, use a comma to separate every 3 digits
            if (viewer_count.toString().length > 3) viewer_count = viewer_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            // if number > 4 digits, use a comma to separate every 3 digits
            // if (followers.toString().length > 3) followers = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            display_online_html += "<div class='row' id='user_" + user_idx + "'>"; // open outer div
            display_online_html += "<div class='col-lg-3 col-md-3 col-xs-4 text-center' data-toggle='modal' data-target='#modal_" + user_name + "'>"; // open div row
            display_online_html += "<img class='img-responsive img_size' src='" + thumbnail_url + "' alt='user thumbnail'>";
            display_online_html += "<p title='" + user_name + "' class='text-center'><strong>" + user_name + "</strong></a></p>";
            display_online_html += "<div class='modal fade' id='modal_" + user_name + "' tabindex='-1' role='dialog' aria-labelledby='modaltitle' aria-hidden='true'>"; // modal
            display_online_html += "<div class='modal-dialog modal-dialog-centered' role='document'>"; // modal-dialog
            display_online_html += "<div class='modal-content'>"; // modal-content
            display_online_html += "<div class='modal-header'>"; // modal-header
            display_online_html += "<h5 class='modal-title' id='modalTitle' style='color:black'>" + user_name + " is currently playing</h5>";
            display_online_html += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
            display_online_html += "<span aria-hidden='true'>&times;</span>";
            display_online_html += "</button>";
            display_online_html += "</div>"; // modal-header
            display_online_html += "<div class='modal-body'>"; // modal-body
            display_online_html += "<iframe id='iframe_" + user_name + "' src='https://player.twitch.tv/?channel=" + user_name + "&muted=true&autoplay=true' height='550' width='550' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>";
            display_online_html += "</div>"; // modal-body
            display_online_html += "<div class='modal-footer'>"; // modal-footer
            display_online_html += "<button type='button' class='btn btn-secondary' data-dismiss='modal' style='color:black'>Close</button>";
            display_online_html += "</div>"; // modal-footer
            display_online_html += "</div>"; // modal-content
            display_online_html += "</div>"; // modal-dialog
            display_online_html += "</div>"; // modal
            display_online_html += "</div>"; // close div row div
            display_online_html += "<div class='col-lg-9 col-md-9 col-xs-8'>"; // open div row 2
            display_online_html += "<a href='" + user_url + "' target='_blank' id='game_url'><p title='Stream Title'><strong><i class='fas fa-gamepad fa-lg' aria-hidden='true'></i>&nbsp<em><span>" + title + "</span></em></strong></p></a>";

            if (microbrowser) display_online_html += "<div class='row' style='" + small_window_style + "'>"; // open div icons

            display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center'>"; // live viewers
            display_online_html += "<p title='" + viewer_count + " live viewers'><i class='fa fa-eye fa-lg text-info' aria-hidden='true'></i>&nbsp<em class='text-success'>" + viewer_count + "</em></p>";
            display_online_html += "</div>"; // live viewers

            if (microbrowser) display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center' style='" + small_div_style2 + " left:-15px;'>"; // stream lang
            else display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center'>"; // stream lang

            display_online_html += "<img title='Streaming in " + language[0] + "' alt='Streaming in " + language[0] + "' class='img-fluid' style='height:2vh' src='" + language[1] + "'>";
            display_online_html += "</div>"; // stream lang

            if (microbrowser) display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center' style='" + small_div_style + small_div_style2 + " left:-35px;'>"; // start at
            else display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center'>"; // start at

            display_online_html += "<p title='Stream started " + (str_start.slice(0, 1).toLowerCase() + str_start.slice(1)) + "'><i class='fas fa-clock fa-lg text-info' aria-hidden='true'></i>&nbsp<em class='text-success'>" + str_start + "</em></p>";
            display_online_html += "</div>"; // start at

            if (microbrowser) display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center' style='" + small_div_style2 + " left:-25px;'>"; // followers
            else display_online_html += "<div class='col-lg-3 col-md-3 col-xs-3 text-center'>"; // followers

            display_online_html += "<p title='followers'><i class='fas fa-users fa-lg text-info' aria-hidden='true'></i>&nbsp<em class='text-success'>1,333,490</em></p>";
            display_online_html += "</div>"; // followers
            display_online_html += "</div>"; // close div icons
            display_online_html += "</div>"; // close div row 2
            display_online_html += "</div>"; // close outer div
            display_online_html += "<hr>";

            $("#users").html(display_online_html);
        });
    }

    // add active class to All tab
    $("#all").on("click", function() {
        if ($(window).width() > 900 || $(document).width() > 900) {
            $(this).addClass("activate");
            // $(this).css({ "cursor": "default" });
            $("#online").removeClass("activate");
            $(this).removeClass("status");

            $("#online").mouseenter(function() {
                $(this).addClass("status");
            }).mouseleave(function() {
                $(this).removeClass("status");
            });
        } else if ($(window).width() < 500 || $(document).width() < 500) {
            $("#online h4").removeClass("activate");
            $("#all h4").addClass("activate");
        }
        ajaxCall("show_all");
    });

    // add active class to Online tab
    $("#online").on("click", function() {
        if ($(window).width() > 900 || $(document).width() > 900) {
            $(this).addClass("activate");
            // $(this).css({ "cursor": "default" });
            $("#all").removeClass("activate");
            $(this).removeClass("status");

            $("#all").mouseenter(function() {
                $(this).addClass("status");
            }).mouseleave(function() {
                $(this).removeClass("status");
            });
        } else if ($(window).width() < 500 || $(document).width() < 500) {
            $("#all h4").removeClass("activate");
            $("#online h4").addClass("activate");
        }
        ajaxCall("show_online");
    });
});