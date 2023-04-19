const { verifyToken } = require('../utils');

// eslint-disable-next-line consistent-return
const isLogged = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next();
  }

  verifyToken(token)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = isLogged;
