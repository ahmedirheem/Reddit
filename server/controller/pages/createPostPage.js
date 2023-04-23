const { join } = require('path');

const homePage = (req, res) => {
  console.log('homePage');
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'create-post.html'));
};

module.exports = homePage;
