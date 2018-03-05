require('dotenv').load();
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const session = require("cookie-session");
const flash = require("connect-flash")
const authMiddleware = require('./src/server/apis/users/middleware/users.middleware.js');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:process.env.SECRET_KEY}))
app.use(flash());


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function(){
	console.log('connection not established');
	process.exit();
});

mongoose.connection.once('open', function() {
	console.log('connection established');
});
// console.log("login require =====>",authMiddleware.loginRequired);

app.get('/',authMiddleware.loginRequired, function(req,res){
	//for frount end form call
	// res.send('null');

});

require('./src/server/apis/index.js')(app);

app.listen(3004, function() {
	console.log('server is listening on port 3004');
});