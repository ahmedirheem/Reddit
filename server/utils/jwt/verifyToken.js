require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const verifyToken = ({ token }) => new Promise((resolve, reject) => {
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});

module.exports = verifyToken;
