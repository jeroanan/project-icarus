module.exports = function(dbConn, collection, callback) {
	 dbConn.collection(collection).count(function(err, count) {
	 	  callback(count);	
	 });		  
}
