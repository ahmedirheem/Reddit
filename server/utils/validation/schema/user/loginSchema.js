const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is a required field',
  }),
  password: Joi.string().min(5).max(25).regex('/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/')
    .required()
    .messages({
      'string.empty': 'Password is a required field',
      'string.pattern.base': 'Your password must be at least 5 characters',
    }),
});

module.exports = loginSchema;
