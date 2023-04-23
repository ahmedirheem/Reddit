const { addDisLikeQuery, getPostByIdQuery } = require('../../database');

const addDisLike = (req, res, next) => {
  const { id } = req.body;

  getPostByIdQuery({ id })
    .then(({ rows }) => {
      const newDisLikes = rows[0].dislikes + 1;
      return newDisLikes;
    })
    .then((newDisLikes) => addDisLikeQuery({ newDisLikes, id }))
    .then((data) => res.json({
      error: false,
      data: {
        post: data.rows[0],
      },
    }))
    .catch((err) => next(err));
};

module.exports = addDisLike;
