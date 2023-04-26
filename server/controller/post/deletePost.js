const { deletePostQuery } = require('../../database');

const deletePost = (req, res, next) => {
  const { id } = req.body;

  deletePostQuery(id)
    .then((data) => res.json({
      error: false,
      data: {
        post: data,
        message: 'Post deleted successfully!',
      },
    }))
    .catch((err) => {
      next(err);
    });
};

module.exports = deletePost;
