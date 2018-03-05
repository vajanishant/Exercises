const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    isHilarious: { type: Boolean, default: true },
    favoriteColors: [String]
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

/* 
create our model from the schema to perform CRUD actions on our documents 
 (which are objects created from the model constructor)
*/
const Instructor = mongoose.model("Instructor", instructorSchema);

/*
 Now it would be nice if we could aggregate our models into one single file 
 and export them out to be used in our routes and other files, so let's export 
 this model out to another file!
*/
module.exports = Instructor;