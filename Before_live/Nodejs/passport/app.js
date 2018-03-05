require('dotenv').load();
const express = require("express")
const app = express()
// const methodOverride = require("method-override")
// const morgan = require("morgan")
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const session = require("cookie-session");
// const flash = require("connect-flash")
const passport = require("passport");

app.set("view engine", "pug");
// app.use(express.static(__dirname + "/public"));
// app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
app.use(session({secret:process.env.SECRET_KEY}))

app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());


app.get("/", function(req,res){
  res.redirect("/users/login");
});

// // send flash messages to all routes
// app.use(function(req, res, next){
//     res.locals.message = req.flash('message');
//     next();
// });

app.use('/users', userRoutes)

app.listen(3003, function(){
  console.log("Server is listening on port 3003");
});