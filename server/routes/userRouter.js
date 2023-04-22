const userRouter = require('express').Router();

const { login, signup } = require('../controller');

userRouter.post('/login', login);
userRouter.post('/signup', signup);

module.exports = userRouter;
