const { getPostByIdQuery } = require('../../database');

const getPost = (req, res, next) => {
  const { id } = req.params;
  getPostByIdQuery({ id })
    .then((data) => {
      console.log(data.rows);
      res.json({
        error: false,
        data: {
          posts: data.rows[0],
        },
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getPost;
