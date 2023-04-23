const { join } = require('path');

const homePage = (req, res, next) => {
  console.log('loggedPage');

  res.sendFile(join(__dirname, '..', '..', 'public', 'home', 'logged.html'));
  next();
};

module.exports = homePage;
