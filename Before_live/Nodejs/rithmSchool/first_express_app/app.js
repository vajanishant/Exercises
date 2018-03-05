const express = require('express');

const app = express();

app.get("/", function(request, response) {
	return response.send('hello world');
});

app.get("/instructor/:firstName", function(request, response) {
  // let's capture the "dynamic" part of the URL, which we are called "first_name". The name that we give to this dynamic part of the URL will become a key in the params object which exists on the request object.

  // let's send back some text with whatever data came in the URL!
  return response.send(
    `The name of this instructor is ${request.params.firstName}`
  );
});

app.listen(3000,function() {
	console.log('go to localhost:3000');
});
