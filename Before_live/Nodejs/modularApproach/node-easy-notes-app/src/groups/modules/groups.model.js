let mongoose = require('mongoose');

let groupSchema = mongoose.Schema({
    name: String,
    noOfPeople: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', groupSchema);