$(document).ready(function() {
  $("#searchBtn").click(function() {
    var input = $("#input").val();
    
    if (input != "") {
      $(".container-fluid").css({
        background: "url('https://www.realityhr.co.uk/wp-content/uploads/2013/04/searching-files.jpg') no-repeat center center fixed",
        "background-size": "cover",
        "max-width": "100%"
      });
      $("#hr").css("visibility", "hidden");
      $("#data_container").css({
        width: "800px",
        top: "-25px"
      });
      $(".input-group").css({
        width: "350px",
        margin: "auto"
      });

      var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";

      if (input.includes(" ") == true) {
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
            "'><h3 class='font_title'>" +
            data[1][i] +
            "</h3><br><p class='font_text list-group-item-text'>" +
            data[2][i] +
            "</p></a></li>";
          $("#output").html(output).slideDown();
        }
        $("#input").val("");
      }); /* api */
    } else {
      alert("Please complete input field!");
    }
  }); /* /searchBtn.click */
  $("#input").on("keypress", function(k) {
    if (k.key == "Enter") {
      $("#searchBtn").click();
    }
  });
}); /* /document */