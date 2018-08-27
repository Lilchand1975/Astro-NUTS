var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({ force: true });

// begains chatApp server.

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('The server is running and connected...')
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

// Connection function
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);


  //Disconnect
  socket.on('disconnect', function(data){
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  //Sending message
  socket.on('send message', function(data){
    console.log(data);
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  //New User
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();

  });
 // Updating new users
  function updateUsernames(){
    io.sockets.emit('get users', users);
  }
});

