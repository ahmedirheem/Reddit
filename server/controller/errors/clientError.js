const { join } = require('path');

const clientError = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'errors', '404.html'));
};

module.exports = clientError;
