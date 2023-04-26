const { join } = require('path');

const homePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'create-post.html'));
};

module.exports = homePage;
