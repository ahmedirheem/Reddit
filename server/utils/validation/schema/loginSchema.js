const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'This field must has a value',
    'any.required': 'Username is a required field',
  }),
  password: Joi.string().min(5).max(25)
    .required()
    .messages({
      'string.empty': 'This field must has a value',
      'string.base': 'This field must be a password',
      'string.min': 'This field must be at least 5 characters',
      'string.max': 'This field must be at max 25 characters',
      'any.required': 'Password is a required field',
    }),
});

module.exports = loginSchema;
