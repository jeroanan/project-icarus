var countCollection = require('./countCollection.js')

module.exports = function(dbConn, callback) {
	 callback(countCollection(dbConn, 'platforms', callback)); 
}
