module.exports = function(app) {

    let groups = require('../controllers/groups.controller.js');
    console.log('print');
    // Create a new Note
    app.post('/groups', groups.create);

    // Retrieve all Groups
    app.get('/groups', groups.findAll);

    // Retrieve a single Note with noteId
    app.get('/groups/:noteId', groups.findOne);

    // Update a Note with noteId
    app.put('/groups/:noteId', groups.update);

    // Delete a Note with noteId
    app.delete('/groups/:noteId', groups.delete);
}