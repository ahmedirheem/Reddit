require('dotenv').config();
const { sign } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const signToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, SECRET_KEY, (err, encoded) => {
    if (err) reject(err);
    resolve(encoded);
  });
});

module.exports = signToken;
