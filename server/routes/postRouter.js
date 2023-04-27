const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
} = require('../controller');

const { addLike, addDisLike, getCommunities } = require('../controller');
const { checkAuth } = require('../middleware');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/user-posts', getUserPosts);

postRouter.get('/communities', getCommunities);
postRouter.use(checkAuth);
postRouter.post('/submit', addPost);
postRouter.post('/delete', deletePost);
postRouter.put('/update', updatePost);
postRouter.post('/like', addLike);
postRouter.post('/dislike', addDisLike);

module.exports = postRouter;
