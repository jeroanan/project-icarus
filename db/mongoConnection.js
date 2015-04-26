var mongoclient = require('mongodb').MongoClient;

module.exports = function(callback) {
	 var collection;
	 mongoclient.connect('mongodb://127.0.0.1:27017/GamesCollection', mongoConnected)

	 function mongoConnected(err, db) {
		  if (err) throw err;
		  dbConn = db;
		  callback(dbConn);
	 }
}
