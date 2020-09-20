const express = require('express');
const morgan = require('morgan');
const app = express();
const con = require('./con')

app.use(morgan('dev'));

app.use(require('./routes/index'));

module.exports = app;

