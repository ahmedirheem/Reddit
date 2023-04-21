require('dotenv').config();

const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const signToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, SECRET_KEY, (err, encoded) => {
    if (err) reject(err);
    resolve(encoded);
  });
});

module.exports = signToken;
