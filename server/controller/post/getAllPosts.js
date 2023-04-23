const { getAllPostsQuery } = require('../../database');

const getAllPosts = (req, res, next) => {
  getAllPostsQuery()
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

module.exports = getAllPosts;
