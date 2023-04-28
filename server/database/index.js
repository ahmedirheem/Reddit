const { connection } = require('./config');

const {
  getUserByEmailQuery,
  signupQuery,
  getAllPostsQuery,
  getUserPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
  getCommunitiesQuery,
  getAllCommentsQuery,
  addCommentQuery,
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
  getCommunitiesQuery,
  getAllCommentsQuery,
  addCommentQuery,
};
