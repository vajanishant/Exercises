let user = require('../models/users.models.js');
// let authMiddleware = require('../middleware/users.middleware.js');
let bcrypt = require('../../../../utils/bcrypt.js');

exports.loginPage = function(req, res) {
  res.send('please enter username and password or create a new user by /signup');
}

exports.userHome = function(req, res) {
  // console.log(`${res.params}`);
  // let userName = req.params.username.slice(1);
  res.send(`Welcome to home page ${req.params.username}`);
  // res.send("hi user");
}

exports.signupPage = function(req, res) {
  res.send('please enter username and password');
}

exports.login = function(req, res) {
  // try{
  //   let usr = await user.User.findOne({username: req.body.username});
  //   let comp = await function(user)
  // }
  // catch(err){
  //   console.log(err);
  // }
  
  // console.log('logged in',req.session.username);

  let loginUser = async () => {
    try {
      // console.log('try called');
      let userData = await user.findOne({username: req.body.username});
      // console.log(userData);
      let compareUserPassword =await userData.comparePassword(req.body.password, function(err, isMatch) {
        if(isMatch){
          req.session.username = req.body.username;
          res.redirect(`/${req.body.username}/home`);
        // next();
      } else {
        res.redirect('/login') 
      }
    });
    }
    catch(err) {
      console.log(err);
      res.send('Error occured');
    }
  } 
  loginUser();

//   user.findOne({username: req.body.username}).then(function(usr){
//     usr.comparePassword(req.body.password, function(err, isMatch){
//       if(isMatch){
//         req.session.username = req.body.username;
//         res.redirect(`/${req.body.username}/home`);
//       } else {
//         res.redirect('/login') 
//       }
//     })
//     // res.send('hello');
//     // user.comparePassword(req.body.password).then(function(){
//     //   res.send("logged in");
//     // });
//   // }, function(err){
//   //   res.send(err)
// })

}

exports.register = function(req, res) {
  // user.create(req.body).then(function(user){
  //   res.send("sucessful");
  // })

  let usr = new user({username: req.body.username, password: req.body.password, isAdmin: req.body.isAdmin});

  usr.save(function(err, data) {
    // console.log(data);
    if(err) {
      // console.log(err);
      console.log("hello error");
      res.status(500).send({message: "Some error occurred while creating the User."});
    } else {
      res.send(data);
    }
  });
}

exports.homePage = function(req, res) {
  res.send('Welcome, you are logged in');
}

exports.logout = function(req, res) {
  req.session.username = null;
  req.flash('message', 'logged out!')
  res.redirect('/login')
}

exports.show = function(req, res) {

 user.find(function(err, users){
  if(err) {
    res.status(500).send({message: "Some error occurred while retrieving users."});
  } else {
    res.send(users);
  }
});

}

exports.showDataPageWise = function(req, res) {

  let perPage = 2
  let page = req.params.page || 1

  user
  .find({})
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec(function(err, usr) {
    res.send(usr);
    // user.count().exec(function(err, count) {
    //   if (err) return next(err)

    // })
  })
}