// Node Dependency
var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Merosathi18?', 
    database : 'astro_db' 
  });
}


// Exporting Connection
module.exports = connection;
