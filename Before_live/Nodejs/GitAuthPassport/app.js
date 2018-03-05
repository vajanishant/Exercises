let fs = require('fs'); 	//------------------
let express = require('express');
// let routes = require('./routes');
let path = require('path');		//----------------------
let mongoose = require('mongoose');
let passport = require('passport');
let config = require('./oauth.js');
// let FacebookStrategy = require('passport-facebook').Strategy;
// let TwitterStrategy = require('passport-twitter').Strategy;
let GithubStrategy = require('passport-github').Strategy;
// let GoogleStrategy = require('passport-google-oauth2').Strategy;
// let InstagramStrategy = require('passport-instagram').Strategy;
let userName=null;
let app = express();
mongoose.connect('mongodb://localhost/passportGit');

let User = mongoose.model('User', {
  oauthID: Number,
  name: String,
  created: Date
});

app.use(passport.initialize());

passport.use(new GithubStrategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
  	// console.log('accessToken =>', accessToken);
  	// console.log('refreshToken =>', refreshToken);
  	// console.log('profile =>', profile);
  	userName=profile.displayName;
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
      	console.log('user =>', user);
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            console.log("saving user ...");
            done(null, user);
          }
        });
      }
      console.log('user is =>', user);
      // return done(null, user);
    });
  }
));



// app.configure(function() {
//   // app.set('views', __dirname + '/views');
//   // app.set('view engine', 'jade');
//   app.use(express.logger());
//   app.use(express.cookieParser());
//   app.use(express.bodyParser());
//   // app.use(express.methodOverride());
//   app.use(express.session({ secret: 'my_precious' }));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(app.router);
//   // app.use(express.static(__dirname + '/public'));
// });

// serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    console.log(user);
      if(!err) done(null, user);
      else done(err, null);
    });
});


app.get('/', function(req, res) {
	res.send(userName);
});
// app.get('/ping', function());
app.get('/account', ensureAuthenticated, function(req, res){
  console.log('/account');
});

app.get('/auth/github',
	passport.authenticate('github'),
	function(req, res){
		console.log('/auth/github');
	}
);

app.get('/auth/github/callback',
	passport.authenticate('github', {successRedirect:'/account' , failureRedirect: '/account' }));

app.get('/logout', function(req, res){
	userName=null
  req.logout();
  res.redirect('/');
});

app.listen(1337, function() {
  	console.log('server up');
});

// test authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
