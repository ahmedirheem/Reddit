const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
} = require('./post');

const { clientError, serverError } = require('./errors');

module.exports = {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  clientError,
  serverError,
};
