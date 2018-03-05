let User = require('../modules/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.password) {
        res.status(400).send({message: "Note can not be empty"});
    }
    let user = new User({name: req.body.name || "Untitled name", password: req.body.password});

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log("hello error");
            res.status(500).send({message: "Some error occurred while creating the User."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.userId});
        }

        user.name = req.body.name;
        user.password = req.body.password;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};