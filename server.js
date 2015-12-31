var express = require('express');
var path = require('path');
var reloadify = require('reloadify');
var port = 3000;

var app = express();

app.use(reloadify(__dirname + '/public'));


var publicPath = path.join(__dirname, 'public');
app.use('/', express.static('public'));

app.listen(port, function() {
	console.log('Listening on port: ', port);
});