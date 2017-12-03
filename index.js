// "use strict";
/* eslint-env jquery */
$(document).ready(function() {
    $(document).scroll(function() {
        var scrollStart = $(this).scrollTop();
        if (scrollStart < 600) {
            $(".navbar").css("background-color", "#262626");
            $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "white");
        }
        if (scrollStart > 565) {
            $(".navbar").css("background-color", "white");
            $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "black");
        }
        if (scrollStart > 1200) {
            $(".navbar").css("background-color", "#262626");
            $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "white");
        }
        if (scrollStart > 2200) {
            $(".navbar").css("background-color", "white");
            $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "black");
        }
    });
});