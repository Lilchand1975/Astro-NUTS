var express = require("express");
var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
// app.engine("handlebars",exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

var router = require('./controllers/astro_controller.js');
app.use('/', router);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("App now listening at localhost: " +PORT)
});