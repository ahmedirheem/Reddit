const { getAllCommentsQuery } = require('../../database');

const getAllComments = (req, res, next) => {
  console.log(req.body);
  getAllCommentsQuery()
    .then((data) => {
      console.log(data.rows);
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
