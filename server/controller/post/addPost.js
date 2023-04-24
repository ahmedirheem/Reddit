const { addPostQuery } = require('../../database');

const addPost = (req, res, next) => {
  const {
    title, caption, images, video, posterId, communityId,
  } = req.body;

  console.log(title, caption, images, video, posterId, communityId,);
  addPostQuery({
    title, caption, images, video, posterId, communityId,
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
