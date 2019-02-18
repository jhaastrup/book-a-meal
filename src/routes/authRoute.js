import express from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  AuthController.userSignup,
);

export default authRouter;
