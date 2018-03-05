const express = require("express");
const router = express.Router();

const users = [];
var id = 1; 

router.get("/items", (req, res, next) => {
  return res.render("index", { users }); 
});

router.get("/items/new", (req, res, next) => {
  return res.render("new");
});

router.get("/items/:id", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render("show", { user });
});

router.get("/items/:id/edit", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render("edit", { user });
});

router.post("/items", (req, res, next) => {
  users.push({
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    id: ++id
  });
  return res.redirect("/items");
});

router.patch("/items/:id", (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  user.itemName = req.body.itemName;
  user.itemPrice = req.body.itemPrice;
  return res.redirect("/items");
});

router.delete("/items/:id", (req, res, next) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  return res.redirect("/items");
});

console.log('hello ', users);

module.exports = router;