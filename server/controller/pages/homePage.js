const { join } = require('path');

const homePage = (req, res) => {
  console.log(req.accessLogged);
  if (req.accessLogged) {
    return res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'logged.html'));
  }
  // res.send('hello');
  return res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'home.html'));
};

module.exports = homePage;
