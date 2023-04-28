const { clientError, serverError } = require('./errors');

const {
  getAllPosts,
  getUserPosts,
  addPost,
  updatePost,
  deletePost,
  addLike,
  addDisLike,
  getCommunities,
  getPost,
} = require('./post');

const {
  login, signup, logout, userProfile,
} = require('./user');

const {
  homePage, loggedPage, createPostPage, profilePage, postPage,
} = require('./pages');

module.exports = {
  clientError,
  serverError,
  getAllPosts,
  getUserPosts,
  addPost,
  updatePost,
  deletePost,
  login,
  signup,
  logout,
  homePage,
  loggedPage,
  profilePage,
  userProfile,
  createPostPage,
  addLike,
  addDisLike,
  getCommunities,
  postPage,
  getPost,
};
