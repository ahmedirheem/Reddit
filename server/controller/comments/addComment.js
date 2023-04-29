const { addCommentQuery } = require('../../database');

const addComment = (req, res, next) => {
  const { commentCaption, commenterId, postId } = req.body;
  addCommentQuery(commentCaption, commenterId, postId)
    .then((data) => {
      res.status(401).json({
        error: false,
        data: {
          comment: data.rows[0],
        },
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = addComment;
