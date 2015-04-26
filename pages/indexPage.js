var fs = require('fs');
var swig = require('swig');
var through = require('through2');

var countgames = require('../db/countGames.js');
var counthardware = require('../db/countHardware.js');
var countplatforms = require('../db/countPlatforms.js');
var countusers = require('../db/countUsers.js');
var mongoconnection = require('../db/mongoConnection.js');
var renderReady = require('../renderReady.js');

module.exports = function (httpStream, request, response) {	 

	 mongoconnection(mongoConnectionEstablished);	 

	 function mongoConnectionEstablished(dbConn) {
		  
		  pageVars = {
				numberOfGames: undefined,
				numberOfHardware: undefined,
				numberOfPlatforms: undefined,
				numberOfUsers: undefined,
				title: "Project Icarus"
		  };	 		  

		  function proceedIfReady(dbConn) {		
				function render() {	
					 var o = swig.renderFile('markup/index.html', pageVars);
					 response.end(o);
				}				
				if (renderReady(pageVars) === true) {
					 dbConn.close();
					 render();
				}
		  }		  
		  
		  function proceed() { proceedIfReady(dbConn) };				
		  
		  var counters  = [
				{ f: countgames, n: 'numberOfGames' },
				{ f: counthardware, n: 'numberOfHardware' },
				{ f: countplatforms, n: 'numberOfPlatforms' },
				{ f: countusers, n: 'numberOfUsers' }
		  ];
		  counters.forEach(function (c) {
				c.f(dbConn, function (n) { pageVars[c.n] = n; proceed()});
		  });					 
	 }
}
