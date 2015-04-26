module.exports = function(dbConn, callback) {
	 dbConn.collection('games').find({}).sort({'_Game__title': 1}).toArray(function(err,data) {
		  callback(data);
	 })
}

