const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const couple = require('./src/routes/couple');
const court = require('./src/routes/court');
const gameformation = require('./src/routes/gameformation');
const user = require('./src/routes/user');

const app = express();

app.use(bodyParser.json());

app.use(cors());


app.use('/couple', couple);
app.use('/court', court);
app.use('/gameformation', gameformation);
app.use('/user', user);

module.exports = app;
