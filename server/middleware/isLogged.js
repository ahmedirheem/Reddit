const { verifyToken } = require('../utils');

// eslint-disable-next-line consistent-return
const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next();
  }
  verifyToken({ token })
    .then(() => {
      req.accessLogged = true;
      next();
    })
    .catch(() => {
      res.clearCookie('token');
      next();
    });
};

module.exports = isLogged;
