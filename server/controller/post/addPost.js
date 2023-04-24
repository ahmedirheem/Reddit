const { addPostQuery } = require('../../database');

const addPost = (req, res, next) => {
  const {
    title, caption, images, video, link, posterId, communityId,
  } = req.body;

  addPostQuery({
    title, caption, images, video, link, posterId, communityId,
  })
    .then((data) => res.json({
      error: false,
      data: {
        post: data.rows[0],
        message: 'Post Added Successfully!',
      },
    }))
    .catch((err) => {
      next(err);
    });
};

module.exports = addPost;
