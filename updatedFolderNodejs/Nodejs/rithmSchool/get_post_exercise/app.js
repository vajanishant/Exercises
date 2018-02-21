const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(request, response) {
	return response.redirect('/items');
});

let shoppingItems = [];

app.get('/items', function(request, response) {
	// shoppingItems.push(request.query);
	return response.send(shoppingItems);
});

app.post('/items', function(request, response) {
	shoppingItems.push(request.body);
	return response.send(shoppingItems);	
})

app.get('/welcome', function(request, response) {
	return response.render('welcome');
});

app.get('/items/new', function(request, response) {
	return response.render('index');
});

// app.post('/items', function(request, response) {
// 	shoppingItems.push()
// });

app.listen('3001', function() {
	console.log('server up');
});