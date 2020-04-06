// "use strict";
/* eslint-env jquery */
// $(document).ready(function() {
//     $(document).scroll(function() {
//         var scrollStart = $(this).scrollTop();
//         if (scrollStart < 600) {
//             $(".navbar").css("background-color", "#262626");
//             $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "white");
//         }
//         if (scrollStart > 565) {
//             $(".navbar").css("background-color", "white");
//             $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "black");
//         }
//         if (scrollStart > 1200) {
//             $(".navbar").css("background-color", "#262626");
//             $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "white");
//         }
//         if (scrollStart > 2200) {
//             $(".navbar").css("background-color", "white");
//             $(".navbar-header h4.navbar-brand, .navbar-nav li a.glyphicon").css("color", "black");
//         }
//     });
// });

let body_scroll = document.documentElement.scrollTop,
    navbar = document.querySelector(".navbar"),
    navbar_brand = document.querySelector(".navbar-brand"),
    navbar_li_a = document.querySelector("a.glyphicon");

switch (body_scroll) {
    case body_scroll === 0:
        // alert(body_scroll);
        navbar.style.background = "#262626";
        break;
    case body_scroll > 565:
        alert(body_scroll);
        navbar.style.background = "white";
        break;
    case body_scroll > 1200:
        alert(body_scroll);
        navbar.style.background = "#262626";
        break;
    case body_scroll > 2200:
        alert(body_scroll);
        navbar.style.background = "white";
        break;
    default:
        // alert(body_scroll);
        navbar.style.background = "#262626";
        break;
}