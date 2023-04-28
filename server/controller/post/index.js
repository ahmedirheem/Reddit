const getAllPosts = require('./getAllPosts');
const getUserPosts = require('./getUserPosts');
const addPost = require('./addPost');
const updatePost = require('./updatePost');
const deletePost = require('./deletePost');
const addLike = require('./addLike');
const addDisLike = require('./addDisLike');
const getCommunities = require('./getCommunities');
const getPost = require('./getPost');

module.exports = {
  getAllPosts,
  getUserPosts,
  addPost,
  updatePost,
  deletePost,
  addLike,
  addDisLike,
  getCommunities,
  getPost,
};
