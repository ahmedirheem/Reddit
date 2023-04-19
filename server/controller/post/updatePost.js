const updatePostQuery = require('../../database/queries/post/updatePostQuery');

const updatePost = (req, res, next) => {
  const {
    id, title, caption, images, video, posterId, communityId,
  } = req.body;

  updatePostQuery({
    id, title, caption, images, video, posterId, communityId,
  })
    .then((data) => res.json({
      error: false,
      data: {
        post: data.rows[0],
        message: 'Post updated successfully!',
      },
    }))
    .catch((err) => {
      next(err);
    });
};

module.exports = updatePost;
