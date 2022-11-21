import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { login, signup, getUserData } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/:id', isAuthenticated, getUserData);

export default userRouter;
