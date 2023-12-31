const express = require('express');
const UserLogin = require('./Routes/Login.route');
const ValidatedUser = require('./Routes/User.route');
const Category = require('./Routes/Category.route');
const Post = require('./Routes/Post.route');
// ...

const app = express();

app.use(express.json());
app.use('/login', UserLogin);
app.use('/user', ValidatedUser);
app.use('/categories', Category);
app.use('/post', Post);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
