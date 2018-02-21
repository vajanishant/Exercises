let express = require('express');
// let user = require('./user');
// let groups = require('./groups');
// module.exports = function(app) {
// 	require('./app/routes/note.routes.js')(app);
// 	console.log('hello');
// }

module.exports = function(app) {
	require('./user/routes/user.routes.js')(app);
	console.log('hello');
}

// module.exports = function(app) {
// 	require('./groups/routes/groups.routes.js')(app);
// 	console.log('hello');
// }