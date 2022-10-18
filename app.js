//http module form Node.js
const http = require("http");

const express = require("express");
const app = express();

//port
const port = 3000;

//module engin setting
const exphbs = require("express-handlebars");
app.engine("hbs", exphbs({ defaultLayout: "main" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, () => {
  console.log("Sever is running http://localhost:3000");
});
