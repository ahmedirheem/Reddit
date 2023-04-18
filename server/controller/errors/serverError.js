const { ValidationError } = require('joi');
const serverError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json()
  }
};