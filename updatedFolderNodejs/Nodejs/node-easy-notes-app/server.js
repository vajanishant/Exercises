let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

let dbConfig = require('./config/database.config.js');
let mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.connect(dbConfig.url, {
	useMongoClient: true
});

mongoose.connection.on('error', function() {
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});

mongoose.connection.once('open', function() {
	console.log('connection established')
}); 

app.get('/', (req, res) => {
	res.json({'message': 'app is running'});
});

require('./app/routes/note.routes.js')(app);

app.listen(3005, function() {
	console.log('server is up');
});