const { join } = require('path');

const postPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'post.html'));
};

module.exports = postPage;
