const { verifyToken, CustomError } = require('../utils');

const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next();
  }
  verifyToken({ token })
    .then(() => res.redirect('/'))
    .catch(() => {
      res.clearCookie('token');
      next();
    });
};

module.exports = isLogged;
