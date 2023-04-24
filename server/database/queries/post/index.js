const getAllPostsQuery = require('./getAllPostsQuery');
const getUserPostsQuery = require('./getUserPostsQuery');
const addPostQuery = require('./addPostQuery');
const updatePostQuery = require('./updatePostQuery');
const deletePostQuery = require('./deletePostQuery');
const getPostByIdQuery = require('./getPostByIdQuery');
const addLikeQuery = require('./addLikeQuery');
const addDisLikeQuery = require('./addDisLikeQuery');

module.exports = {
  getAllPostsQuery,
  getUserPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
};
