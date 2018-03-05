const mongoose = require("mongoose");
/*
 Database config, this can be placed in another file if you want
 just make sure it runs when your server starts
*/
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/pets-app", {
    useMongoClient: true // this option is necessary for Mongoose 4.11 and up
  })
  .then(() => {
    // once connected, give a success message
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    // if something goes wrong let us know
    console.log(err);
  });

// exporting models from other files in our module.exports object
exports.Pet = require("./pet");