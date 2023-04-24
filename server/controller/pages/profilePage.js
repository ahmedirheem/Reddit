const { join } = require('path');

const profilePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'profile.html'));
};

module.exports = profilePage;
