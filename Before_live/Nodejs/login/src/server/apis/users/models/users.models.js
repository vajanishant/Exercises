const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // usernames should always be required
        required: true,
        // and most importantly unique! We will need to be able to uniquely
        // identify a user when we discuss logging in
        unique: true
    },
    password: {
        type: String,
        // passwords do not have to be unique, but we really need them to exist
        required: true
    },
    isAdmin: {
    	type: Boolean,
    	default: false
    }
});

require('../../../../utils/bcrypt.js')(userSchema);
let User = mongoose.model('User', userSchema);
module.exports = User;
