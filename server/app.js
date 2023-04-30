require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');

const multer = require('multer');
// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');

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
  express.urlencoded({ extended: true }),
  cookieParser(),
  compression(),
]);

app.use(express.static(path.join(__dirname, '..', 'public')));

// ///////////////////////////////////////////////

const upload = multer();

app.post('/upload', upload.single('image'), (req, res) => {
  const resizedImage = sharp(req.file.buffer).resize(800, 600).jpeg().toBuffer();
  Image.create({ data: resizedImage });

  res.send('Image uploaded successfully!');
});

app.get('/image/:id', async (req, res) => {
  const { id } = req.params;

  // Retrieve the image data from the database using Sequelize
  const image = await Image.findByPk(id);

  // Send the image data as a response to the GET request
  res.type('jpeg').send(image.data);
});
// ///////////////////////////////////////////////

app.use(router);
app.use(clientError);
app.use(serverError);

module.exports = { app, upload };
