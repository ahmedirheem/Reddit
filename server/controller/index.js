const { clientError, serverError } = require('./errors');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
} = require('./post');

const { login, signup } = require('./user');

module.exports = {
  clientError,
  serverError,
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  login,
  signup,
};
