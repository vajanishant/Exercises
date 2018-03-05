const router = require("express").Router();
/*
  The Router is an object on the base express module.
  This router object will have similar methods (.get, .post, .patch, .delete) to the 
  app object we have previously been using.
*/
//const router = express.Router();

const users = []; // this would ideally be a database, but we'll start with something simple
let id = 1; // this will help us identify unique users

// instead of app.get...
router.get("/users", (req, res, next) => {
  return res.render("index", { users }); // {users:} is ES2015 object shorthand for {users:users}
});

router.get("/users/new", (req, res, next) => {
  return res.render("new");
});

router.get("/users/:id", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render("show", { user });
});

router.get("/users/:id/edit", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render("edit", { user });
});

// instead of app.post...
router.post("/users", (req, res, next) => {
  users.push({
    name: req.body.name,
    id: ++id
  });
  return res.redirect("/users");
});

// instead of app.patch...
router.patch("/users/:id", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  user.name = req.body.name;
  return res.redirect("/users");
});

// instead of app.delete...
router.delete("/users/:id", (req, res, next) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  return res.redirect("/users");
});

// Now that we have built up all these routes - let's export this module for use in our app.js!
module.exports = router;