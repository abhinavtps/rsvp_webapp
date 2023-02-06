const express = require("express");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/user", (req, res) => {
  res.render("users/register");
});

app.get("/guest", (req, res) => {
  res.send("Please fill the event name for the event you want to attend");
});

app.listen(3000, () => {
  console.log("serving on port 3000");
});
