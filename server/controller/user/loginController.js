const bcrypt = require('bcrypt');

const { getUserByEmailQuery } = require('../../database');
const { CustomError, signToken } = require('../../utils');

const loginController = (req, res, next) => {
  const { email: userEmail, password } = req.body;

  getUserByEmailQuery(userEmail)
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
      const { id, username, email } = req.user;
      return signToken({ id, username, email }, { expiresIn: '1d' });
    })
    .then((token) => {
      const { id, username, email } = req.user;

      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            message: 'User Logged in successfully!',
            user: { id, username, email },
          },
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = loginController;
