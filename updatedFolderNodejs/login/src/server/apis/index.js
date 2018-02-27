let express = require('express');

module.exports = function(app) {
	require('./users/routes/users.routes.js')(app);
	// console.log('hello');
}
