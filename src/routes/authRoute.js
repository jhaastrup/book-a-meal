import express from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  AuthController.userSignup,
);

authRouter.post(
  '/login',
  AuthController.userLogin,
);

export default authRouter;
