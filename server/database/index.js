const { connection } = require('./config');
const { getUserByEmailQuery, signupQuery } = require('./queries');

const {
  getAllPostsQuery,
  getUserPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
} = require('./queries');

module.exports = {
  connection,
  signupQuery,
  getUserByEmailQuery,
  getAllPostsQuery,
  getUserPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
};
