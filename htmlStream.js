var through = require('through2');

module.exports = function (response) {
	 var responseBody = '';

	 return through(write, end);
	 function write(buffer, encoding, next) {
		  responseBody += buffer.toString();
		  next();
	 }

	 function end(done) {
		  response.writeHead(200, {
				'Content-Length': responseBody.length,
				'Content-Type': 'text/html'
		  });
								
		  response.end(responseBody);
		  done();
	 }
}
