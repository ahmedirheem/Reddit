const { connection } = require('./config');
const { getUserByEmailQuery, signupQuery } = require('./queries');

const {
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
} = require('./queries');

module.exports = {
  connection,
  signupQuery,
  getUserByEmailQuery,
  getAllPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
};
