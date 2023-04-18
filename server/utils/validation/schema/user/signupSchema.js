const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(5).max(50).required()
    .messages({
      'string.empty': 'Username is a required filed',
    }),
  email: Joi.string().email().required()
    .messages({
      'string.empty': 'Email is a required filed',
    }),
  password: Joi.string().min(5).max(25).regex('/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/')
    .required()
    .messages({
      'string.empty': 'Password is a required field',
      'string.pattern.base': 'Your password must be at least 5 characters',
    }),
});

module.exports = signupSchema;
