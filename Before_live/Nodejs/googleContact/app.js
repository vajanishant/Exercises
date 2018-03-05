let fs = require('fs'); 	//------------------
let express = require('express');
// let routes = require('./routes');
let path = require('path');		//----------------------
let mongoose = require('mongoose');
let passport = require('passport');
let config = require('./auth.js');
let request = require('request');
// let FacebookStrategy = require('passport-facebook').Strategy;
// let TwitterStrategy = require('passport-twitter').Strategy;
// let GithubStrategy = require('passport-github').Strategy;
let GoogleStrategy = require('passport-google-oauth2').Strategy;
let GoogleContacts = require('google-contacts-oauth');
// let InstagramStrategy = require('passport-instagram').Strategy;
let userName=null;
let app = express();
mongoose.connect('mongodb://localhost/passportGoogle');

let User = mongoose.model('User', {
  oauthID: Number,
  name: String,
  created: Date
});

app.use(passport.initialize());

/*passport.use(new GithubStrategy({
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
*/

passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackURL
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
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

// app.get('/auth/github/callback',
// 	passport.authenticate('github', {successRedirect:'/account' , failureRedirect: '/account' }));

// app.get('/logout', function(req, res){
// 	userName=null
//   req.logout();
//   res.redirect('/');
// });

// app.get('/auth/google',
//   passport.authenticate('google', { scope: [
//     'https://www.googleapis.com/auth/plus.login',
//     'https://www.googleapis.com/auth/plus.profile.emails.read'
//   ] }
// ));
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
//     res.redirect('/account');
//   });

app.get('/auth/google',
 passport.authenticate('google', 
   { scope : [
    'https://www.googleapis.com/auth/userinfo.profile',
   'https://www.googleapis.com/auth/userinfo.email',
   'https://www.googleapis.com/auth/plus.login',
   'https://www.google.com/m8/feeds'
   ], 
   accessType: 'offline',
   approvalPrompt: 'force', 
   redirect_uri:'http://localhost:3005/auth/google/callback/' 
}))

app.get('/auth/google/callback/', function(req, res) {
 request('https://www.googleapis.com/oauth2/v4/token',
   { method:'POST',
   form:{ 
    'code':req.query.code,
    'client_id':'445743736071-2s03bhk93ogm7b5ni0enn8rg4qsve7ml.apps.googleusercontent.com',//`${config.google.clientID}`,
    'client_secret':'vsHw3ebcnWq3KJiVVvjKMcbu',//`${config.google.clientSecret}`, 
    'redirect_uri':'http://localhost:3005/auth/google/callback', 
    'grant_type':'authorization_code'
  }, 
  json:false 
},
 (function(err, response, body){ 
  //console.log("----err-----",err);
   console.log('this is body', body); 
   let accessToken = JSON.parse(body).access_token;
   console.log('----------------------->>>>>>>>>>>',typeof(accessToken)); 
   let opts = { token: accessToken};
   GoogleContacts(opts, function(err, data){
    //console.log(data[0].email); 
   /* data.forEach( (item) => { 
      if(item.email) { console.log("--email---", item.email); }
      else { console.log('---name', item.name); };
    } );*/
    console.log('--------------------',data); 
    res.send(data);
  });
 }));
// console.log('finish');
// res.send('done');
});
          


app.listen(3005, function() {
    console.log('server up');
});

// test authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
