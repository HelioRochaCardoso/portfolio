$(document).ready(function() {
  $("#searchBtn").click(function() {
    var input = $("#input").val();

    if (input !== "") {
      $("body").css({
        "background": "url('https://www.realityhr.co.uk/wp-content/uploads/2013/04/searching-files.jpg') no-repeat center center fixed",
        "background-size": "cover",
        "max-width": "100%",
        "height": "100vh"
      });
      $("#hr").css("visibility", "hidden");
      $("#data_container").css({
        "width": "800px",
        "top": "-25px"
      });
      $("#search_container").css({
        "width": "350px",
      });

      var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";

      if (input.includes(" ") === true) {
        input = input.replace(/\s/g, "+");
        api += input.concat("&format=json&callback=?");
      } else {
        api += input.concat("&format=json&callback=?");
      }

      $.getJSON(api, function(data) {
        var output = "";
        $("#output").html("");

        for (i in data[1]) {
          output +=
            "<li class='list-group-item' style='margin: 15px'><a style='text-decoration: none' href='" +
            data[3][i] +
            "' target='_blank'><h3 class='font_title'>" +
            data[1][i] +
            "</h3><br><p class='font_text list-group-item-text'>" +
            data[2][i] +
            "</p></a></li>";
          $("#output").html(output).slideDown();
        }
        $("#input").val("");
        $("#searchBtn, #randomBtn").css("color", "black").hover(function() {
            $(this).css("color", "rgb(38, 118, 254)");
          },
          function() {
            $(this).css("color", "black");
          });
        $("#page_title").css("color", "#732626");
        $("#randomBtn").css("font-size", "1.7em");
      });
    } else {
      alert("Please complete input field!");
    }
  });

  $("#input").on("keypress", function(e) {
    if (e.key == "Enter") {
      $("#searchBtn").click();
    }
  });

});
