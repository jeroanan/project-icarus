var http = require('http');
var route = require('./route.js');

var server = http.createServer(function (req, res) { route(req, res) });
server.listen(8080)

