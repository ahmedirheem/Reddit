const bcrypt = require('bcrypt');
const { CustomError, signToken, signupSchema } = require('../../utils');
const { getUserByEmailQuery, signupQuery } = require('../../database');

const signup = (req, res, next) => {
  const { email, password, username } = req.body;

  getUserByEmailQuery({ email })
    .then(({ rows }) => {
      if (rows.length) throw new CustomError('This email is already used', 400);
      return signupSchema().validateAsync({ email, password, username }, { abortEarly: false });
    })
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => ({ email, password: hash, username }))
    .then((data) => signupQuery(data))
    .then((data) => {
      req.user = data;
      signToken(data);
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
