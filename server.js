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

