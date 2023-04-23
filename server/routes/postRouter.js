const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
} = require('../controller');

const { addLike, addDisLike } = require('../controller');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/submit', addPost);
postRouter.delete('/delete', deletePost);
postRouter.put('/update', updatePost);
postRouter.get('/like', addLike);
postRouter.get('/dislike', addDisLike);

module.exports = postRouter;
