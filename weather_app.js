$(document).ready(function() {
  var lat, lon, city, country, region, tempCelsius, tempFahrenheit;
  var tempToggle = true;
  var d = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = monthNames[d.getMonth()];
  var day = d.getDate();
  var month2 = d.getMonth() + 1;
  month2 < 10 ? month2 = "0" + month2 : month2;
  var year = d.getFullYear();
  var day2 = day;
  day2 < 10 ? day2 = "0" + day2 : day2;
  var full_date = day2 + "/" + month2 + "/" + year;
  var day3 = "".concat(day);

  switch (day3) {
    case "1":
      day3 += "st";
      break;
    case "2":
      day3 += "nd";
      break;
    case "3":
      day3 += "rd";
      break;
    case "21":
      day3 += "st";
      break;
    case "22":
      day3 += "nd";
      break;
    case "23":
      day3 += "rd";
      break;
    case "31":
      day3 += "st";
      break;
    default:
      day3 += "th";
  }
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var week_days = weekDays[d.getDay()];
  var date = week_days + ", " + day3 + " " + month + " " + year;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else {
    return "Geolocation not supported!";
  }

  function showWeather(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var api2Key = "/23f2cb5811871361ee0e93010e82ee0a/";
    var api2 = "https://api.darksky.net/forecast" + api2Key + "" + lat + "," + lon + "?exclude=minutely,hourly,alerts,flags";
    ajax_call(api2);
  }


  function ajax_call(api_data) {
    $.ajax({
      url: api_data,
      dataType: 'jsonp',
      type: 'POST',
      error: function(xhr) {
        $("body").html("Error" + xhr.status).css({
          "color": "red",
          "font-size": "25px"
        });
      },
      success: function(json) {
        var data_calculation = new Date(json.currently.time * 1000);
        var update_string = "";
        var update_string2 = update_string.concat(data_calculation);
        var update_hour = update_string2.slice(16, 21);
        var time_zone = update_string2.slice(25, 31);
        var last_update = "Last update at " + update_hour + " " + time_zone;
        tempFahrenheit = Math.round(json.currently.temperature);
        var humidity = (json.currently.humidity * 100).toFixed(0) + "%";
        var windSpeed = json.currently.windSpeed.toFixed(0) + " mph";
        var precipitation = (json.currently.precipProbability * 100).toFixed(0) + "%";
        var weather_description = json.currently.summary;
        var icon = json.currently.icon;
        var hour = d.getHours();

        // Converts Celsius into Fahrenheit and rounds it to integer
        tempCelsius = Math.round((tempFahrenheit - 32) * 5 / 9);

        // Creates object constructor for weather background images
        function weather_url(urlDay, urlNight, name, synonym, synonym2, synonym3) {
          this.urlDay = urlDay;
          this.urlNight = urlNight;
          this.name = name;
          this.synonym = synonym;
          this.synonym2 = synonym2;
          this.synonym3 = synonym3;
        }

        // Object constructor instances
        var sunny = new weather_url(
          "https://investmentscientist.files.wordpress.com/2011/11/clear-sky.jpg",
          "https://cdn.pcwallart.com/images/full-moon-sky-wallpaper-wallpaper-1.jpg",
          "sunny",
          "sun",
          "clear",
          "clear sky"
        );

        var cloudy = new weather_url(
          "https://orig03.deviantart.net/f3c6/f/2008/135/c/9/cloudy_day_by_malrynn.jpg",
          "https://s-media-cache-ak0.pinimg.com/originals/fc/fd/b7/fcfdb71f4bb464b00fc7e5fd3b51be6a.jpg",
          "cloudy",
          "clouds",
          "overcast",
          "partly cloudy"
        );

        var foggy = new weather_url(
          "https://emmatakesaphotograph.files.wordpress.com/2011/11/foggy-tree-line.jpg",
          "https://s-media-cache-ak0.pinimg.com/originals/f2/c4/71/f2c4710a45e47ab54e8f3878e44cbc1c.jpg",
          "foggy",
          "haze",
          "mist",
          "fog"
        );

        var rainy = new weather_url(
          "https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/08/13/6360670335816709561877596775_635838328234606825-1082304514_rainy_day_wallpaper_2.jpeg",
          "https://picalls.com/wp-content/uploads/2014/12/Rainy-day.jpg",
          "rainy",
          "rain",
          "shower",
          "drizzle"
        );

        var snowy = new weather_url(
          "https://i.ytimg.com/vi/kJGjueu-s0U/maxresdefault.jpg",
          "https://anotherwanderingsoul.files.wordpress.com/2012/12/one-snowy-night-wallpaper__yvt2.jpg",
          "snowy",
          "snow",
          "blizzard",
          "blizz"
        );

        var stormy = new weather_url(
          "https://c1.staticflickr.com/6/5185/5679003271_61219ed51e_b.jpg",
          "https://www.castanet.net/content/1281112496ull.jpg",
          "stormy",
          "storm",
          "hail",
          "thunderstorm"
        );

        var weatherImg = [sunny, cloudy, foggy, rainy, snowy, stormy];

        // Weather picture to be displayed
        var picToDisplay;

        // Displays weather picture depending on weather description
        for (var i = 0; i < weatherImg.length; i++) {
          if (weather_description.toLowerCase().includes(weatherImg[i].name) == true ||
            weather_description.toLowerCase().includes(weatherImg[i].synonym) == true ||
            weather_description.toLowerCase().includes(weatherImg[i].synonym2) == true ||
            weather_description.toLowerCase().includes(weatherImg[i].synonym3) == true) {
            if (hour >= 7 && hour <= 18) {
              picToDisplay = weatherImg[i].urlDay;
            } else {
              picToDisplay = weatherImg[i].urlNight;
            }
          }
        }
        $("#weather_description").html(weather_description);

        var skycons = new Skycons({
          "color": "orange"
        });
        // "resizeClear": true // uncomment this hack for displaying on Android, otherwise don't uncomment

        // Attaching the skycon to the DOM element
        skycons.add(document.getElementById("icon1"), icon);

        // Starts animation!
        skycons.play();

        $("body").css({
          "background": "url('" + picToDisplay + "') no-repeat", //"center center fixed",
          "background-size": "cover",
          "max-width": "100%"
        });
        $("#date").html("<span id='date' title='" + full_date + "'>" + date + "</span>");
        $("#weather_temp").html(tempCelsius + "&degC");
        $("#last_update").text(last_update);

        // Toggles between Celsius and Fahrenheit
        $("#temp_toggle").click(function() {
          if (tempToggle === false) {
            $("#temp_toggle").html("&degF");
            $("#weather_temp").html(tempCelsius + "&degC");
            tempToggle = true;
          } else {
            $("#temp_toggle").html("&degC");
            $("#weather_temp").html(tempFahrenheit + "&degF");
            tempToggle = false;
          }
        });
        $("#humidity").html(humidity);
        $("#wind").html(windSpeed);
        $("#precip").html(precipitation);
      }
    });
  }

  searchLocation(lat, lon);

  function searchLocation(latitude, longitude) {
    var loc = "https://ipapi.co/json/";
    $.getJSON(loc, function(data) {
      city = data.city;
      region = data.region;
      country = data.country;
      $("#city_info").html(city + ", " + region + ", " + country);
    });
  }
});
