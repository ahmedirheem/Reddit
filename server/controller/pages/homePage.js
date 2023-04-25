const { join } = require('path');

const homePage = (req, res) => {
  if (req.accessLogged) {
    return res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'logged.html'));
  }
  return res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'home.html'));
};

module.exports = homePage;
