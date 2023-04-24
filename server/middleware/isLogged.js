const { verifyToken } = require('../utils');

const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.json({
      error: true,
      message: 'Unauthorized!',
    });
    // throw new CustomError('Unauthorized!', 400);
  }
  verifyToken({ token })
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
};

module.exports = isLogged;
