const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?zip=34756&appid=7d4afcfb6d120270b393eb86ed42c22c&units=imperial";
  https.get(url, function (response) {
    console.log(response.statusCode);
  });
  res.send("server is up and running.");
});

app.listen(3000, () => {
  console.log("server");
});
