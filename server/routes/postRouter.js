const express = require('express');
const addPost = require('../controller/post/addPost');
const deletePost = require('../controller/post/deletePost');
const getAllPosts = require('../controller/post/getAllPosts');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/create', addPost);
postRouter.delete('/delete', deletePost);

module.exports = postRouter;
