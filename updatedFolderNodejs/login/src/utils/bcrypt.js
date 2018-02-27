let express = require('express');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt'); 
// let User = require('../server/apis/users/models/users.models.js');

module.exports = (userSchema) => {


    userSchema.pre('save', function(next){
        console.log('function call');

        let user = this;
        // if (!user.isModified('password')) return next();
        // bcrypt.hash(user.password, 10).then(function(hashedPassword) {
        //     user.password = hashedPassword;
        //     next();
        // }, function(err){
        //     return next(err)
        // })
        
        let  getHashPassword = async () => {
            try {
                let hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
                console.log('123456', user.password);
                next();
            }
            catch(err) {
                console.log(err);
                res.send('Error occured');
            }
        }
        
        getHashPassword();

    });
    


    userSchema.methods.comparePassword = function(candidatePassword, next) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if(err) return next(err);
            next(null, isMatch);
        });
    };

}