require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '..', 'public', 'assets'));
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

const router = require('./routes');
const { clientError, serverError } = require('./controller');

const app = express();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  compression(),
]);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);
app.use(clientError);
app.use(serverError);

module.exports = { app };
