var express = require('express');
var router = express.Router();
var users = require('../models/index.js');


// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


router.get('/index', function (req, res) {
  users.selectAll(function(data) {
    var hbsObject = { users: data };
    res.render('index', hbsObject);
  });
});


router.post('/users/create', function (req, res) {
  users.insertOne(req.body.first_name, function() {
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;