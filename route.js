var url = require('url');

var index = require('./pages/indexPage.js');
var allgames = require('./pages/allgamesPage.js');

var htmlStream = require('./htmlStream.js');

module.exports = function(request, response) {
	 path = url.parse(request.url, true).path;

	 routes = [
		  {route: "/", dest: index},
		  {route: "/allgames", dest: allgames}
	 ];

	 var matchingRoutes = routes.filter(function (r) { return r.route === path });
	 
	 if (matchingRoutes.length === 0) {
		  response.statusCode = 404;
		  response.end();
	 } else {
		  var route = matchingRoutes[0];
		  route.dest(htmlStream(response), request, response);
	 }
}
