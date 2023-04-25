const bcrypt = require('bcrypt');
const { CustomError, signToken, signupSchema } = require('../../utils');
const { getUserByEmailQuery, signupQuery } = require('../../database');

const signup = (req, res, next) => {
  const { email, password, username } = req.body;
  signupSchema.validateAsync({ email, password, username }, { abortEarly: false })
    .then(() => getUserByEmailQuery(email))
    .then(({ rows }) => {
      if (rows.length) throw new CustomError('This email is already used', 400);
    })
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => ({ email, password: hash, username }))
    .then((data) => signupQuery(data))
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      req.user = data.rows[0];
      return signToken(req.user);
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            message: 'User Created Successfully',
            user: req.user,
          },
        });
    })
    .catch((err) => next(err));
};

module.exports = signup;
