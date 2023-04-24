const { addLikeQuery, getPostByIdQuery } = require('../../database');

const addLike = (req, res, next) => {
  const { id } = req.body;

  getPostByIdQuery({ id })
    .then(({ rows }) => {
      console.log(rows);
      const newLikes = rows[0].likes + 1;
      return newLikes;
    })
    .then((newLikes) => addLikeQuery({ newLikes, id }))
    .then((data) => res.json({
      error: false,
      data: {
        post: data.rows[0],
      },
    }))
    .catch((err) => next(err));
};

module.exports = addLike;
