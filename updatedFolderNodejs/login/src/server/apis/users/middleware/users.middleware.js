let user = require('../models/users.models.js');
let mongoose = require('mongoose');

exports.loginRequired = function(req,res,next){
    console.log('login require call', req.session.username);
    if(!req.session.username){
        console.log('error', 'Please log in!');
        // req.flash('error', 'Please log in!')
        res.redirect('/login')
    } else {
        next();
    }
}

exports.ensureCorrectUser = function(req,res,next){
    let userParamsAdmin;
    user.findOne({username: `${req.params.username}`}, function(err, data) {
        if(err)
            console.log(err);
        else {
            userParamsAdmin = data.isAdmin;
            if(!userParamsAdmin) {
             if(req.session.username !== req.params.username ){
                res.send('unauthorized access');
            }
        }
        else {
            next();
        }
    }
});
    // console.log(userAdmin);

}