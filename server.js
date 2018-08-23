var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/astro_controller.js');
app.use('/', router);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("App now listening at localhost: " +PORT)
});