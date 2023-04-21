const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'This field must has a value',
    'string.base': 'This field must be an email',
    'any.required': 'Email is a required field',
  }),
  password: Joi.string().min(5).max(25).regex(/^[a-zA-Z0-9]{3}$/)
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
