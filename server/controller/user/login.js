const bcrypt = require('bcrypt');
const { getUserByEmailQuery } = require('../../database');
const {
  // eslint-disable-next-line no-unused-vars
  CustomError, loginSchema, signToken,
} = require('../../utils');

const login = (req, res, next) => {
  const { email: userEmail, password } = req.body;

  getUserByEmailQuery({ userEmail })
    .then(({ rows }) => {
      if (!rows.length) throw new CustomError('Invalid email or password', 400);
      return rows[0];
    })
    .then((data) => {
      req.user = data;
      return bcrypt.compare(password, data.password);
    })
    .then((result) => {
      if (!result) throw new CustomError('Invalid email or password', 400);
    })
    .then(() => {
      const { id, email, username } = req.user;
      return signToken({ id, email, username }, { expiresIn: '1d' });
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            message: 'User Logged in Successfully!',
            user: req.user,
          },
        });
    })
    .catch((err) => next(err));
};

module.exports = login;
