const express = require('express');
const addPost = require('../controller/post/addPost');
const deletePost = require('../controller/post/deletePost');
const getAllPosts = require('../controller/post/getAllPosts');
const updatePost = require('../controller/post/updatePost');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/create', addPost);
postRouter.delete('/delete', deletePost);
postRouter.put('/update', updatePost);

module.exports = postRouter;
