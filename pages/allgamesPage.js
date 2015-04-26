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
