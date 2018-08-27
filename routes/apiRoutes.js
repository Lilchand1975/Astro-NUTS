// LOAD DATA
var daysData = require("../public/data/days.js");
var db = require("../models");


// ROUTING

module.exports = function(app) {
  
  app.get("/api/days/", function(req, res) {
    res.json(daysData);
  });

  app.get("/api/days/monday", function(req, res) {
    res.json(daysData[0]);
  });

  app.get("/api/days/tuesday", function(req, res) {
    res.json(daysData[1]);
  });

  app.get("/api/days/wednesday", function(req, res) {
    res.json(daysData[2]);
  });

  app.get("/api/days/thursday", function(req, res) {
    res.json(daysData[3]);
  });

  app.get("/api/days/friday", function(req, res) {
    res.json(daysData[4]);
  });

  app.get("/api/days/saturday", function(req, res) {
    res.json(daysData[5]);
  });

  app.get("/api/days/sunday", function(req, res) {
    res.json(daysData[6]);
  });
  
  //saving new user
    app.post("/api/users", function(req,res) {
      console.log(req.body);
      db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday
      })
        .then(function(dbUser) {
          console.log(dbUser);
          res.json(dbUser);
        });
    });
  
};
