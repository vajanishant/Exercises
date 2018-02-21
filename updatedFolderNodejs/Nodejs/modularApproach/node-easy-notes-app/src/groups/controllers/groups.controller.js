let Group = require('../modules/groups.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.noOfPeople) {
        res.status(400).send({message: "Group can not be empty"});
    }
    let group = new Group({name: req.body.name || "Untitled name", noOfPeople: req.body.noOfPeople});

    group.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Group."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Group.find(function(err, groups){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving groups."});
        } else {
            res.send(groups);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Group.findById(req.params.groupId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve group with id " + req.params.groupId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Group.findById(req.params.groupId, function(err, group) {
        if(err) {
            res.status(500).send({message: "Could not find a group with id " + req.params.groupId});
        }

        group.name = req.body.name;
        group.noOfPeople = req.body.noOfPeople;

        group.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update group with id " + req.params.groupId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Group.remove({_id: req.params.groupId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete group with id " + req.params.id});
        } else {
            res.send({message: "Group deleted successfully!"})
        }
    });
};