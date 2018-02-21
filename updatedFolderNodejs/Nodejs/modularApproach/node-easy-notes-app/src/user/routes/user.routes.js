module.exports = function(app) {

    let users = require('../controllers/user.controller.js');
    console.log('print');
    // Create a new Note
    app.post('/users', users.create);

    // Retrieve all Users
    app.get('/users', users.findAll);

    // Retrieve a single Note with noteId
    app.get('/users/:userId', users.findOne);

    // Update a Note with noteId
    app.put('/users/:userId', users.update);

    // Delete a Note with noteId
    app.delete('/users/:userId', users.delete);
}