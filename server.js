var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


var server = app.listen(5000, function () {
  var host = process.env.HOST || '0.0.0.0';
  var port = process.env.PORT || 5000;

  console.log('Example app listening at http://%s:%s', host, port);
});


// port: process.env.PORT || 3000 
