const express = require('express');

const {
  getAllComments,
  addComment,
} = require('../controller');

const { checkAuth } = require('../middleware');
// const { upload } = require('../app');

const commentRouter = express.Router();

// postRouter.post('/upload', upload.single('image'), (req, res) => {
//   res.send('image Uploaded');
// });

// commentRouter.use(checkAuth);
commentRouter.get('/:postId', getAllComments);
commentRouter.post('/add/:postId', addComment);

module.exports = commentRouter;
