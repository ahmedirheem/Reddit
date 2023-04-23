const { clientError, serverError } = require('./errors');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  addLike,
  addDisLike,
} = require('./post');

const { login, signup, logout } = require('./user');

const { homePage, loggedPage, createPostPage } = require('./pages');

module.exports = {
  clientError,
  serverError,
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  login,
  signup,
  logout,
  homePage,
  loggedPage,
  createPostPage,
  addLike,
  addDisLike,
};
