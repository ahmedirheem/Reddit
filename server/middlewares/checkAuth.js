const { CustomError, verifyToken } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError('Unauthorized!', 400);
  }

  verifyToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = checkAuth;
