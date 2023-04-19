const getAllPostsQuery = require('../../database/queries/post/getAllPostsQuery');

const getAllPosts = (req, res, next) => {
  getAllPostsQuery()
    .then((data) => {
      console.log(data.rows);
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
