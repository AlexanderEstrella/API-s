const form = document.getElementById("weatherForm");
form.addEventListener("submit", Getweather);
window.addEventListener("load", (eve) => {
  const date = new Date();
  const options = { weekday: "short", day: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  $(".Date .Today").html(formattedDate);
});

function Getweather(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const cityName = document.getElementById("submittedscity").value;
  const unit = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=02363ee05c5b0fec0f8200517a2bcb98" +
    "&units=" +
    unit;

  axios
    .get(url)
    .then(function (response) {
      /* first */

      const weatherData0 = response.data.list[0];
      const temp0 = weatherData0.main.temp;
      const weatherDescription0 = weatherData0.weather[0].description;
      const icon0 = weatherData0.weather[0].icon;
      const imageUrl0 = "http://openweathermap.org/img/wn/" + icon0 + "@2x.png";
      const weatherIs0 = $("<p></p>");
      const temperatureIs0 = $("<span></span>");
      const weatherImg0 = $("<img>");

      weatherIs0.text("Today the weather is currently " + weatherDescription0);
      temperatureIs0.innerText(
        "The temperature in Orlando is " + temp0 + " degrees Fahrenheit"
      );

console.log(temperatureIs0);
      weatherImg0.attr("src", imageUrl0);

      $(".weatheritem0 .weatheris0").html(weatherIs0);

      $(".weatheritem0 .temperatureis0").html(temperatureIs0);
      $("#weatherImg0").attr("src", imageUrl0);
      /* second */

      const weatherData3 = response.data.list[3];
      const temp3 = weatherData3.main.temp;
      const weatherDescription3 = weatherData3.weather[0].description;
      const icon3 = weatherData3.weather[0].icon;
      const imageUrl3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

      const weatherIs1 = $("<p></p>");
      const temperatureIs1 = $("<span></span>");
      const weatherImg1 = $("<img>");

      weatherIs1.text(
        "The weather is currently expected to be " + weatherDescription3
      );
      temperatureIs1.innerText(
        "The temperature in Orlando is " + temp3 + " degrees Fahrenheit"
      );
      weatherImg1.attr("src", imageUrl3);

      $(".weatheritem1 .weatheris1").html(weatherIs1);
      $(".weatheritem1 .temperatureis1").html(temperatureIs1);
      $("#weatherImg1").attr("src", imageUrl3);

      /* third */
      const weatherData10 = response.data.list[10];
      const temp10 = weatherData10.main.temp;
      const weatherDescription10 = weatherData10.weather[0].description;
      const icon10 = weatherData10.weather[0].icon;
      const imageUrl10 =
        "http://openweathermap.org/img/wn/" + icon10 + "@2x.png";

      const weatherIs2 = $("<p></p>");
      const temperatureIs2 = $("<span></span>");
      const weatherImg2 = $("<img>");

      weatherIs2.text(
        "The weather is currently expected to be " + weatherDescription10
      );
      temperatureIs2.innerText(
        "The temperature in Orlando is " + temp10 + " degrees Fahrenheit"
      );
      weatherImg2.attr("src", imageUrl10);

      $(".weatheritem2 .weatheris2").html(weatherIs2);
      $(".weatheritem2 .temperatureis2").html(temperatureIs2);
      $("#weatherImg2").attr("src", imageUrl10);
    })

    console.log(temperatureIs0, temperatureIs1, temperatureIs2,);

    .catch(function (error) {
      let message = error.response;
      theerror = message.data.message;
      alert(theerror);
    });
}
