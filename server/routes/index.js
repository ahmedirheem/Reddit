const express = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const { homePage } = require('../controller');

const router = express.Router();

router.get('/', homePage);
router.use('/post', postRouter);
router.use('/user', userRouter);

module.exports = router;
