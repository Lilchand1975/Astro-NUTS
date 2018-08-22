var orm = require('../config/orm.js');

var user = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },

  insertOne: function(first_name, callback) {
    orm.insertOne(first_name, function(res) {
      callback(res);
    });
  },
  
  updateOne: function(ID, callback) {
    orm.updateOne(ID, function(res) {
      callback(res);
    });
  }
};

module.exports = user;