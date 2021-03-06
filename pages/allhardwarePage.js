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

var getAllHardware = require('../db/getAllHardware.js');
var mongoconnection = require('../db/mongoConnection.js');

module.exports = function(httpStream, request, response) {

	 mongoconnection(mongoConnectionEstablished);	 

	 function mongoConnectionEstablished(dbConn) {

		  getAllHardware(dbConn, function(data) {
				var o = swig.renderFile('markup/allhardware.html', {hardware: data, title: 'All Hardware'});
				response.end(o);
		  });
	 }

}
