const { getPostByIdQuery } = require("../../database");

const getPost = (req, res, next) => {
  console.log(req.body.id);
  const { id } = req.body;
  getPostByIdQuery({ id })
    .then((data) => {
      res.json({
        error: false,
        data: {
          post: data.rows[0],
        },
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getPost;
