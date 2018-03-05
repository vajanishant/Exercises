const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

const users = [];
let id = 1;

app.get('/', (req, res, next) => {
return res.redirect('/users');
});


app.get('/users', (req, res, next) => {
  return res.render('index', { users });
});

app.get('/users/new', (req, res, next) => {
  return res.render('new');
});

app.get('/users/:id', (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render('show', { user });
});

app.get('/users/:id/edit', (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.render('edit', { user });
});


app.post('/users', (req, res, next) => {
  users.push({
    name: req.body.name ,
    id,
  });
  id++;
  return res.redirect('/users')
});

app.patch('/users/:id', (req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  user.name = req.body.name;
  return res.redirect('/users');
});

app.delete('/users/:id', (req, res, next) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex,1);
  return res.redirect('/users');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});