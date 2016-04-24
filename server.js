
var express = require('express');
var path = require('path');
var app = express();


// serve static files on public folder
app.use(express.static(__dirname + '/public'));

// serve files from bower
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// startup the server
app.listen(8000, function () {
  console.log('Demo App is running on http://localhost:8000');
});