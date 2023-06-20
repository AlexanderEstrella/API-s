const form = document.getElementById("weatherForm");
form.addEventListener("submit", Getweather);

function Getweather(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const cityName = document.getElementById("submittedscity").value;
  const unit = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=02363ee05c5b0fec0f8200517a2bcb98" +
    "&units=" +
    unit;

  axios
    .get(url)
    .then(function (response) {
      console.log(response.status, response);
      const weatherData = response.data;
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      const weatherIs = $("<p></p>");
      const temperatureIs = $("<span></span>");
      const weatherImg = $("<img>");

      weatherIs.text("The weather is currently " + weatherDescription);
      temperatureIs.text(
        "The temperature in Orlando is " + temp + " degrees Fahrenheit"
      );
      weatherImg.attr("src", imageUrl);

      // Append the created elements to the existing elements in the document
      $(".weatheritem .weatheris").html(weatherIs);
      $(".weatheritem .temperatureis").html(temperatureIs);
      $("#weatherImg").replaceWith(weatherImg);
    })
    .catch(function (error) {
      console.log(error);
    });
}
