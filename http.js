const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const geoCode = require("./utilis/geoCode");
const foreCast = require("./utilis/weatherApi");
const newWeather = require("./utilis/NewWeather");
const app = express();
const path = require("path");
const hbs = require("hbs");
app.set("view engine", "hbs");
const newpath = path.join(__dirname + "/template/views");
const publicDir = path.join(__dirname + "/public");
app.use(express.static(publicDir));
app.set("views", newpath);
const PartialDir = path.join(__dirname, "/template");
console.log(PartialDir);
hbs.registerPartials(PartialDir);
app.get("", (req, res) => {
  res.render("header", {
    tittle: "Weather App",
    name: "usama",
  });
});
// console.log(__dirname+ "../template");
app.get("/about", (req, res) => {
  res.render("about", {
    tittle: "this is about page",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "please enter the address",
    });
  }

  newWeather(req.query.address, (error, { location, temp,conditon }={}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    res.send({
      location,
      CurrentTemperture: temp,
      address: req.query.address,
      conditon
    });
  });
});
app.get("/about/*", (req, res) => {
  res.render("helpTest");
});
app.get("*", (req, res) => {
  res.render("error", {
    tittle: "404 error",
    name: "usama",
  });
});
app.listen(3000, () => {
  console.log("app is running at 3000");
});
