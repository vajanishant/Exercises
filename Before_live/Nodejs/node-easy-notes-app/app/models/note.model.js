let mongoose = require('mongoose');

let NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);