const { connection } = require('./config');
const { getUserByEmailQuery, signupQuery } = require('./queries');

const {
  getAllPostsQuery,
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
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
};
