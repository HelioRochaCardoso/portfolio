// "use strict";

let navbar = document.querySelector("#navbar");

document.getElementsByTagName("body")[0].onscroll = () => {
    window.scrollY > 0 ? navbar.style.backgroundColor = "white" : navbar.style.backgroundColor = "transparent";
};