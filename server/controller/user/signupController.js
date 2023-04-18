const bcrypt = require('bcrypt');
const { signupQuery } = require('../../database');
const { signupSchema, signToken } = require('../../utils');

const signupController = (req, res, next) => {
  const { username, email, password } = req.body;

  signupSchema.validateAsync({ username, email, password }, { abortEarly: false })
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => ({ username, email, password: hash }))
    .then((data) => signupQuery(data))
    .then((data) => {
      res.user = data;
      return signToken(data, { expireIn: '1d' });
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        .json({
          error: false,
          data: {
            message: 'User Created Successfully!',
            user: req.user,
          },
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signupController;
