const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');
const router = require('./routes');
const { clientError, serverError } = require('./controller');
require('dotenv').config();

const app = express();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  compression(),
]);

app.use('/api/v1', router);
app.use(clientError);
app.use(serverError);

module.exports = app;
