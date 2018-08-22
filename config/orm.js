
var connection = require('./connection.js');

// Methods for MySQL commands
var orm = {

  selectAll: function(callback) {
    // Running MySQL Query
    connection.query('SELECT * FROM astro', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  findOne: function( day_of_the_week, callback) {

    connection.query('SELECT * FROM astro SET ? WHERE ?', function(err, result) {
      if (err) throw err;
      callback(result);
    })
  },

  // insertOne() function call back.
  insertOne: function(first_name, callback){

    connection.query('INSERT INTO USERS SET ?', {
      born_day: born_day,
      first_name: first_name,
      last_name: last_name,
      email: email
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    }
  );

  },

  // updateOne()
  updateOne: function(ID, callback){

    connection.query('UPDATE Users SET ? WHERE ?', [{day_of_the_week}, {id: ID}], function (err, result) {
      if (err) throw err;
      callback(result);
    });


  }

};


module.exports = orm;