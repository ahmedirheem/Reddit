const { join } = require('path');

const loggedPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'home', 'logged.html'));
};

module.exports = loggedPage;
