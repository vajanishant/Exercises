const config = require(‘./config/config.js’).get(process.env.NODE_ENV);
require('dotenv').load();
let express = require("express")
let app = express()
let bodyParser = require("body-parser");
let session = require("cookie-session");
// let flash = require("connect-flash")
let authMiddleware = require('./src/server/apis/users/middleware/users.middleware.js');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:process.env.SECRET_KEY}))
// app.use(flash());


// let dbConfig = require('./config/database.config.js');
let mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.connect(config.database);

mongoose.connection.on('error', function(){
	console.log('connection not established');
	process.exit();
});

mongoose.connection.once('open', function() {
	console.log('connection established');
});
// console.log("login require =====>",authMiddleware.loginRequired);

app.get('/', function(req,res){
	//for frount end form call
	// res.send('null');

});

require('./src/server/apis/index.js')(app);

app.listen(3004, function() {
	console.log('server is listening on port 3004');
});