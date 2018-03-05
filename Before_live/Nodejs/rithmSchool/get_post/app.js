// const express = require("express");
// const app = express();

// app.set("view engine", "pug");

// app.get("/", function(request, response) {
//   return response.render("index");
// });

// let arr = [];

// app.get("/create-new-user", function(request, response) {
//   // let's examine the data from the query string
//   // using request.query! We will have two keys of first and last
//   // since those are the values of the name attributes from our form
//   arr.push(request.query);
//   return response.send(arr);
// });

// app.listen(3000, function() {
//   console.log(
//     "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
//   );
// });

// ---------------------------------------------------------------------------------------

const express = require("express");
const app = express();

// include body-parser
const bodyParser = require("body-parser");

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.get("/", function(request, response) {
  return response.render("login");
});

app.get("/welcome", function(request, response) {
  console.log(response.header);
  return response.render("welcome");
});

let arr = [];

app.post("/create-new-user", function(request, response) {
  // since we are using body-parser, we now have access to an object on the request object called "body", which contains all the values in the forms
  arr.push(request.body);
  return response.redirect('/welcome');
});

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});