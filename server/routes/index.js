const express = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const {
  homePage, createPostPage, profilePage, userProfile, postPage, getPost,
} = require('../controller');

const { isLogged, checkAuth } = require('../middleware');

const router = express.Router();

// router.get('/', isLogged, homePage);
router.get('/', isLogged, homePage);
router.get('/submit', checkAuth, createPostPage);
router.use('/api/v1/post', postRouter);
router.use('/api/v1/user', userRouter);
router.get('/profile/:username', userProfile);
router.get('/:username', profilePage);

router.get('/posts/:postId', getPost);
router.get('/post/:postId', postPage);

module.exports = router;
