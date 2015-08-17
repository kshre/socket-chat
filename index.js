var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket) {
  console.log('a user has connected');
});

http.listen(3000, function(){
  console.log('Server running at localhost:3000');
});
