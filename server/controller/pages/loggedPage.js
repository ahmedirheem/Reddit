const { join } = require('path');

const loggedPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'logged.html'));
};

module.exports = loggedPage;
