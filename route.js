// copyright (c) David Wilson 2015
// This file is part of Project Icarus.

// Project Icarus is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Project Icarus is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

var url = require('url');

var index = require('./pages/indexPage.js');
var allgames = require('./pages/allgamesPage.js');
var allhardware = require('./pages/allhardwarePage.js');
var allplatforms = require('./pages/allplatformsPage.js');
var allusers = require('./pages/allusersPage.js');

var htmlStream = require('./htmlStream.js');

module.exports = function(request, response) {
	 path = url.parse(request.url, true).path;

	 routes = [
		  {route: '/', dest: index},
		  {route: '/allgames', dest: allgames},
		  {route: '/allhardware', dest: allhardware},
		  {route: '/allplatforms', dest: allplatforms},
		  {route: '/allusers', dest: allusers}
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
