const { signupQuery } = require('../../database');
const { signupSchema } = require('../../utils');
const bcrypt = require('bcrypt');

const signupController = (req, res, next) => {
  const { username, email, password } = req.body;

  signupSchema.
};

module.exports = signupController;
