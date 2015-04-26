module.exports = function(pageVars) {	 
	 for (var k in pageVars)
		  if (pageVars[k] === undefined) return false;
	 return true;
}


