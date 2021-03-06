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

var swig = require('swig');

var mongoconnection = require('../db/mongoConnection.js');
var getAllGames = require('../db/getAllGames.js');

module.exports = function (httpStream, request, response) {	 

	 mongoconnection(mongoConnectionEstablished);	 

	 function mongoConnectionEstablished(dbConn) {
		  
		  getAllGames(dbConn, function (data) {
				var o = swig.renderFile('markup/allgames.html', {games: data, title: "All Games"});
				response.end(o);
		  });
		  
	 }
}
