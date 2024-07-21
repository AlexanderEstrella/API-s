const date = new Date();
const options = { weekday: "short", day: "numeric", month: "long" };
const formattedDate = date.toLocaleDateString(undefined, options);

document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("weatherForm");
  form.addEventListener("submit", Getweather);

  document.querySelector(".Date .Today").textContent = formattedDate;
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

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data); // Logging the entire data object for debugging

      /* first */
      const weatherData0 = data.list[0];
      const temp0 = weatherData0.main.temp;
      const weatherDescription0 = weatherData0.weather[0].description;
      const icon0 = weatherData0.weather[0].icon;
      const imageUrl0 = "http://openweathermap.org/img/wn/" + icon0 + "@2x.png";

      const weatherIs0 = document.createElement("p");
      weatherIs0.textContent = `Today the weather is currently ${weatherDescription0}`;
      const weatherImg0 = document.createElement("img");
      weatherImg0.setAttribute("src", imageUrl0);
      const temperatureIs0 = document.querySelector(".temperatureis0");

      document.querySelector(".weatheritem0 .weatheris0").innerHTML = ""; // Clear previous content
      document.querySelector(".weatheritem0 .weatheris0").appendChild(weatherIs0);
      temperatureIs0.textContent = `The temperature in ${cityName} is ${temp0} degrees Fahrenheit`;
      document.getElementById("weatherImg0").setAttribute("src", imageUrl0);

      /* second */
      const weatherData3 = data.list[3];
      const temp3 = weatherData3.main.temp;
      const weatherDescription3 = weatherData3.weather[0].description;
      const icon3 = weatherData3.weather[0].icon;
      const imageUrl3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

      const weatherIs1 = document.createElement("p");
      weatherIs1.textContent = `The weather is currently expected to be ${weatherDescription3}`;
      const temperatureIs1 = document.querySelector(".temperatureis1");
      const weatherImg1 = document.createElement("img");
      weatherImg1.setAttribute("src", imageUrl3);

      document.querySelector(".weatheritem1 .weatheris1").innerHTML = ""; // Clear previous content
      document.querySelector(".weatheritem1 .weatheris1").appendChild(weatherIs1);
      let nextDay1 = new Date(date);
      nextDay1.setDate(nextDay1.getDate() + 1);
      let dayAfter1 = document.createElement("span");
      dayAfter1.innerText = nextDay1.toLocaleDateString(undefined, options);
      document.querySelector(".weatheritem1 .weatheris1").appendChild(dayAfter1);
      temperatureIs1.textContent = `The temperature in ${cityName} is ${temp3} degrees Fahrenheit`;
      document.getElementById("weatherImg1").setAttribute("src", imageUrl3);

      /* third */
      const weatherData10 = data.list[10];
      const temp10 = weatherData10.main.temp;
      const weatherDescription10 = weatherData10.weather[0].description;
      const icon10 = weatherData10.weather[0].icon;
      const imageUrl10 = "http://openweathermap.org/img/wn/" + icon10 + "@2x.png";

      const weatherIs2 = document.createElement("p");
      weatherIs2.textContent = `The weather is currently expected to be ${weatherDescription10}`;
      const temperatureIs2 = document.querySelector(".temperatureis2");
      const weatherImg2 = document.createElement("img");
      weatherImg2.setAttribute("src", imageUrl10);

      document.querySelector(".weatheritem2 .weatheris2").innerHTML = ""; // Clear previous content
      document.querySelector(".weatheritem2 .weatheris2").appendChild(weatherIs2);
      let nextDay2 = new Date(date);
      nextDay2.setDate(nextDay2.getDate() + 2);
      let dayAfter2 = document.createElement("span");
      dayAfter2.innerText = nextDay2.toLocaleDateString(undefined, options);
      document.querySelector(".weatheritem2 .weatheris2").appendChild(dayAfter2);
      temperatureIs2.textContent = `The temperature in ${cityName} is ${temp10} degrees Fahrenheit`;
      document.getElementById("weatherImg2").setAttribute("src", imageUrl10);

      console.log(temp0, temp3, temp10); // Check if the temperatures are correctly populated
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch weather data. Please try again later.");
    });
}
