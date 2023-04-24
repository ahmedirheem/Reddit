const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
} = require('../controller');

const { addLike, addDisLike } = require('../controller');
const { isLogged } = require('../middleware');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/submit', addPost);
postRouter.delete('/delete', deletePost);
postRouter.put('/update', updatePost);
postRouter.post('/like', isLogged, addLike);
postRouter.post('/dislike', isLogged, addDisLike);

module.exports = postRouter;
