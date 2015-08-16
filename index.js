var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello cliches!</h1>');
});

http.listen(3000, function(){
  console.log('Server running at localhost:3000');
});
