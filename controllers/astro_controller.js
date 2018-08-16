var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all astro to DOM)
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});


// user new astro
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});



// Export routes
module.exports = router;