var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// if user open the page start a sockets service
io.on('connection', function(socket) {
  console.log('a user has connected');
  
  // alert on disconnect
  socket.on('disconnect', function() {
    console.log('a user has disconnected');
  });

  socket.on('chat message', function(msg) {
    console.log("message:" +  msg);
  });
});

http.listen(3000, function(){
  console.log('Server running at localhost:3000');
});
