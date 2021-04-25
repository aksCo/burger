var express = require('express');
//var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var handlebars = require('express-handlebars');
var port = process.env.PORT || 3000;
var app = express();


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(methodOverride("_method"));
app.use(bodyParser.json());
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerscontroller.js");

app.use(routes);

app.listen(port);