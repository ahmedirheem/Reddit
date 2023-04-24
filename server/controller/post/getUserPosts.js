const { getUserPostsQuery } = require('../../database');

const getUserPosts = (req, res, next) => {
  const { posterId } = req.body;
  getUserPostsQuery(posterId)
    .then((data) => {
      res.json({
        error: false,
        data: {
          posts: data.rows,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getUserPosts;
