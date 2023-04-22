const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({
      error: false,
      data: {
        message: 'Logged out Successfully!',
      },
    });
};

module.exports = logout;
