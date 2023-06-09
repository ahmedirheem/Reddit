const express = require('express');

const {
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
  getAllComments,
  addComment,
} = require('../controller');

const { addLike, addDisLike, getCommunities } = require('../controller');
const { checkAuth } = require('../middleware');
// const { upload } = require('../app');

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/user-posts', getUserPosts);

// postRouter.post('/upload', (req, res) => {
//   res.send('image Uploaded');
// });

postRouter.get('/communities', getCommunities);
postRouter.use(checkAuth);

postRouter.get('/comments/:postId', getAllComments);
postRouter.post('/comment/:postId', addComment);

postRouter.post('/submit', addPost);
postRouter.post('/delete', deletePost);
postRouter.put('/update', updatePost);
postRouter.post('/like', addLike);
postRouter.post('/dislike', addDisLike);

module.exports = postRouter;
