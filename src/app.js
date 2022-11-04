const express = require('express');
const UserLogin = require('./Routes/Login.route');
// ...

const app = express();

app.use(express.json());
app.use('/login', UserLogin);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
