const { getUserByEmailQuery, signupQuery } = require('./user');
const {
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
} = require('./post');

module.exports = {
  getUserByEmailQuery,
  signupQuery,
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
};
