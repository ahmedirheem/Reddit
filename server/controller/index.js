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

const homePage = require('./homePage');
const loggedPage = require('./loggedPage');

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
  addLike,
  addDisLike,
};
