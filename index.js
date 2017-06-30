$(document).ready(function() {
  $(document).scroll(function() {
    var scrollStart = $(this).scrollTop();
    if (scrollStart < 600) {
      $("#navbar").css("background-color", "#262626");
      $("#nav_tabs li a, #name").css("color", "white");
      $("#name_line").css("border-color", "white");
    }
    if (scrollStart > 565) {
      $("#navbar").css("background-color", "white");
      $("#nav_tabs li a, #name").css("color", "black");
      $("#name_line").css("border-color", "black");
    }
    if (scrollStart > 1200) {
      $("#navbar").css("background-color", "#262626");
      $("#nav_tabs li a, #name").css("color", "white");
      $("#name_line").css("border-color", "white");
    }
    if (scrollStart > 2200) {
      $("#navbar").css("background-color", "white");
      $("#nav_tabs li a, #name").css("color", "black");
      $("#name_line").css("border-color", "black");
    }
  });
});
