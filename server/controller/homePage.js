const { join } = require('path');

const homePage = (req, res) => {
  console.log('homePage');
  res.sendFile(join(__dirname, '..', '..', 'public', 'home', 'index.html'));
};

module.exports = homePage;
