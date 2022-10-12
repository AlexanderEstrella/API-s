const express = require("express");
const https = require("https");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const unit = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=02363ee05c5b0fec0f8200517a2bcb98" +
    "&units=" +
    unit;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      console.log(data);

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const Imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>The temperature in " +
          query +
          " is " +
          temp +
          " degrees fahrenheit</h1>"
      );
      res.write("<img src=" + Imageurl + ">");
      res.send();
    });
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
