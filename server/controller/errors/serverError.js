const { join } = require('path');
const { JsonWebTokenError } = require('jsonwebtoken');
const { ValidationError } = require('joi');
const { CustomError } = require('../../utils');

// eslint-disable-next-line consistent-return
const serverError = (err, req, res) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      data: {
        details: err.details,
      },
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: 'Unauthorized!',
      },
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.status).json({
      error: true,
      data: {
        message: err.message,
      },
    });
  }

  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'errors', '500.html'));
};

module.exports = serverError;
