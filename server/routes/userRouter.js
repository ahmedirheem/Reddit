const userRouter = require('express').Router();

const { login, signup, logout } = require('../controller');

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/logout', logout);

module.exports = userRouter;
