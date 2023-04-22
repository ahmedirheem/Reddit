const { getUserByEmailQuery, signupQuery } = require('./user');
const {
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
} = require('./post');

module.exports = {
  getUserByEmailQuery,
  signupQuery,
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
};
