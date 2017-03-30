var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
  
  console.log('Example app listening on %s', port);
});


// port: process.env.PORT || 3000 
