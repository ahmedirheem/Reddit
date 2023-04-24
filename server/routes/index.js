const express = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const {
  homePage, loggedPage, createPostPage, profilePage,
} = require('../controller');

const { isLogged } = require('../middleware');

const router = express.Router();

router.get('/', loggedPage);
router.get('/', homePage);
router.get('/profile', profilePage);
router.get('/submit', createPostPage);
router.use('/api/v1/post', postRouter);
router.use('/api/v1/user', userRouter);

module.exports = router;
