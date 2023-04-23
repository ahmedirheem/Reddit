const { verifyToken, CustomError } = require('../utils');

const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new CustomError('Unauthorized!', 400);
  }
  verifyToken({ token })
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
};

module.exports = isLogged;
