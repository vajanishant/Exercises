const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "pug");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.render("index");
});

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   return next(err);
// });

app.use((err, req, res, next) => {
  //res.status(err.status || 500);
  if(req.path.indexOf('/login')) {
  	return;
  } else if(!req.session.isLoggedIn) {
  	res.status(401).send('Unauthorized');
  } else {
  	next();
  }
 	
  //return res.send(  'index is not there in view file'
    /*message: err.message,
    
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    
    error: app.get("env") === "development" ? err : {}*/
   );
});

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});