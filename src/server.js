const express = require('express');
const app = express();
const cors = require('cors');

// ! Routes
const routerUser = require('./routes/user.route.js');
const routerAuth = require('./routes/auth.route.js');

// * MIDDLEWARES Cors y Parse JSON
app.use(cors());
app.use(express.json());

// * MIDDLEWARE ROUTERS
app.use('/users', routerUser);
app.use('/auth', routerAuth);

app.get('/', (req, res) => {
  res.json('Functioning API OK!');
});

module.exports = app;
