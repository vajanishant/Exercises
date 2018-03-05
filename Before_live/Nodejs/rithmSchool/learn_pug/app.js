const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const colors = ["red", "green", "blue"];

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug"); // notice here we are telling express to render views using the pug templating engine.

app.use(express.static(__dirname + "../public"))

app.get("/", function(request, response) {
  // const firstName = "Elie";
  return response.render("index" /*, { name: firstName }*/); // here we are rendering a template called index.pug inside of the views folder. We are also passing a value to the template called "name". Inside of the template, the value of that variable will be the value of the firstName variable, which is "Elie"
});

let arr = [];

app.get("/create-new-user", function(request, response) {
  // let's examine the data from the query string
  // using request.query! We will have two keys of first and last
  // since those are the values of the name attributes from our form
  
  arr.push(request.query);
  return response.send(arr);
});

// app.get("/colors", function(request, response) {
//   // {colors} is ES2015 object shorthand notation for {colors: colors}
//   return response.render("data", { colors }); // here we are rendering a template called data.pug inside of the views folder. We are also passing a value to the template called "colors". Inside of the template, the value of that variable will be the value of the colors variables, which is an array.
// });

// app.get("/base", function(request, response) {
//   // {colors} is ES2015 object shorthand notation for {colors: colors}
//   return response.render("hello"); // here we are rendering a template called data.pug inside of the views folder. We are also passing a value to the template called "colors". Inside of the template, the value of that variable will be the value of the colors variables, which is an array.
// });

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});