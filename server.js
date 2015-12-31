var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var reloadify = require('reloadify');
var app = express();
app.use(reloadify(__dirname + '/public'));

var port = 3000;

var publicPath = path.join(__dirname, 'public');
app.use('/', express.static('public'));

app.listen(port, function() {
	console.log('Listening on port: ', port);
});