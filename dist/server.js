'use strict';

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';
var bodyParser = require('body-parser');
var translate = require('./lib/routes/translate');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

router.get("/script", function (req, res) {
  res.sendFile(path + "index.js");
});

app.use("/translate", translate);

app.use("/", router);

app.use("*", function (req, res) {
  res.send("This page cannot be loaded");
});

app.listen(4000, function () {
  console.log("Live at Port 4000");
});