const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'This field must has a value',
    'string.base': 'This field must be an email',
    'any.required': 'Email is a required field',
  }),
  password: Joi.string().min(5).max(25).regex(/[a-zA-Z0-9]/)
    .required()
    .messages({
      'string.empty': 'This field must has a value',
      'string.min': 'This field must be at least 5 characters',
      'string.max': 'This field must be at max 25 characters',
      'string.base.pattern': 'Your password must has characters and numbers',
      'any.required': 'Password is a required field',
    }),
  username: Joi.string().min(5).max(50)
    .required()
    .messages({
      'string.empty': 'This field must has a value',
      'string.min': 'This field must be at least 5 characters',
      'string.max': 'This field must be at max 50 characters',
      'any.required': 'Email is a required field',
    }),
});

module.exports = signupSchema;
