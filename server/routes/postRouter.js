const express = require('express');
const addPost = require('../controller/post/addPost');
const deletePost = require('../controller/post/deletePost');

const postRouter = express.Router();

postRouter.post('/create', addPost);
postRouter.delete('/delete', deletePost);

module.exports = postRouter;
