const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
} = require('../controller');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/submit', addPost);
postRouter.delete('/delete', deletePost);
postRouter.put('/update', updatePost);

module.exports = postRouter;
