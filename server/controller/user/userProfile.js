const { getUserByEmailQuery } = require('../../database');

const userProfile = (req, res, next) => {
  const { username } = req.params;

  getUserByEmailQuery(username)
    .then((data) => {
      const {
        // eslint-disable-next-line camelcase, no-shadow
        id, username, avatar, email, followers, signed_at,
      } = data.rows[0];
      res.json({
        error: false,
        data: {
          user: {
            // eslint-disable-next-line camelcase
            id, username, avatar, email, followers, signed_at,
          },
        },
      });
    })
    .catch((err) => next(err));
};

module.exports = userProfile;
