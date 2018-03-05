const user = require('../models/users.models.js');
const mongoose = require('mongoose');

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

    console.log('ensure call');
    let userParamsAdmin;
    user.findOne({username: `${req.params.username}`}, function(err, data) {
        console.log('ensure user.findone call');        
        if(err)
            console.log(err);
        else {
            console.log('else call');
            userParamsAdmin = data.isAdmin;
            if(!userParamsAdmin) {
             if(req.session.username !== req.params.username ){
                res.send('unauthorized access');
            }
            else {
                next();
            }
        }
        else {
            console.log('next call');
            next();
        }
    }
});
    // console.log(userAdmin);

}