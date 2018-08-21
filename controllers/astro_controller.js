var express = require('express');
var router = express.Router();
var Users = require('../models/index.js');


// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all astro to DOM)
router.get('/index', function (req, res) {
  user.selectAll(function(data) {
    var hbsObject = { Users: data };
    res.render('index', hbsObject);
  });
});


// user new astro
router.post('/Users/create', function (req, res) {
  Users.insertOne(req.body.first_name, function() {
    res.redirect('/index');
  });
});



// Export routes
module.exports = router;