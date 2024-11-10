const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const couple = require('./routes/couple');
const court = require('./routes/court')

const app = express();

app.use(bodyParser.json());

app.use(cors());


app.use('/', couple);
app.use("/", court)

module.exports = app;
