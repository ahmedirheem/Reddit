const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
} = require('../controller');

const { addLike, addDisLike } = require('../controller');
const { isLogged } = require('../middleware');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/user-posts', getUserPosts);
postRouter.post('/submit', addPost);
postRouter.delete('/delete', deletePost);
postRouter.put('/update', updatePost);
postRouter.post('/like', addLike);
postRouter.post('/dislike', addDisLike);

module.exports = postRouter;
