const { getUserByEmailQuery, signupQuery } = require('./user');
const {
  getAllPostsQuery,
  getUserPostsQuery,
  addPostQuery,
  updatePostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  addDisLikeQuery,
  getCommunitiesQuery,
} = require('./post');

const { getAllCommentsQuery, addCommentQuery } = require('./comments');

module.exports = {
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
};
