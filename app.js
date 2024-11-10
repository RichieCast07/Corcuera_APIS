const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const couple = require('./src/routes/couple');
const court = require('./src/routes/court')
const gameformation = require('./src/routes/gameformation')

const app = express();

app.use(bodyParser.json());

app.use(cors());


app.use('/', couple);
app.use('/', court);
app.use('/', gameformation);

module.exports = app;
