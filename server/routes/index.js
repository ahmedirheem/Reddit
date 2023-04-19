const express = require('express');
const postRouter = require('./postRouter');

const router = express.Router();

router.use('/post', postRouter);

module.exports = router;
