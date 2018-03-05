
module.exports = function(app) {

	const users = require('../controller/users.controller.js');
	const authMiddleware = require('../middleware/users.middleware.js');	
	// console.log('print');

	app.get('/', users.loginPage);
	app.get('/login', users.loginPage);
	app.get('/signup', users.signupPage);
	app.post('/login', users.login);
	app.post('/signup', users.register);
	app.get('/home', users.homePage);
	app.get('/logout', users.logout);
	app.get('/showdata', users.show);
	app.get('/showdata/:page', users.showDataPageWise);
	app.get('/:username/home', authMiddleware.loginRequired, authMiddleware.ensureCorrectUser, users.userHome);
}