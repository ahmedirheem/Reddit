const { getAllCommentsQuery } = require('../../database');

const getAllComments = (req, res, next) => {
  const { postId } = req.params;
  getAllCommentsQuery(postId)
    .then((data) => {
      res.status(401).json({
        error: false,
        data: {
          comments: data.rows,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = getAllComments;
