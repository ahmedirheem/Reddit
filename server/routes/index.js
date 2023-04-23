const express = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const { homePage, loggedPage } = require('../controller');
const { isLogged } = require('../middleware');

const router = express.Router();

// router.get('/', isLogged, loggedPage);
router.get('/', loggedPage);
router.use('/api/v1/post', postRouter);
router.use('/api/v1/user', userRouter);

module.exports = router;
