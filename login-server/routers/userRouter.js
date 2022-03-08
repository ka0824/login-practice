const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get("/signin", userController.signIn);
userRouter.post("/signup", userController.signUp);

module.exports = userRouter;