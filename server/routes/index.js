const express = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const {
  homePage, createPostPage, profilePage, userProfile,
} = require('../controller');

const { isLogged, checkAuth } = require('../middleware');

const router = express.Router();

router.get('/', isLogged, homePage);
router.get('/profile/:username', userProfile);
router.get('/:username', checkAuth, profilePage);
router.get('/submit', checkAuth, createPostPage);
router.use('/api/v1/post', postRouter);
router.use('/api/v1/user', userRouter);

module.exports = router;
