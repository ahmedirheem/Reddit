const { addCommentQuery } = require('../../database');

const addComment = (req, res, next) => {
  console.log(req.body);
  addCommentQuery()
    .then((data) => {
      console.log(data.rows);
      res.status(401).json({
        error: false,
        data: {
          comment: data.rows[0],
        },
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = addComment;
