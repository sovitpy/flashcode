import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { login, signup, getUserData } from '../controllers/userController.js';
import { addCard } from '../controllers/userCardController.js';

const userRouter = Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/profile', isAuthenticated, getUserData);
userRouter.post('/cards/:id', isAuthenticated, addCard);
// userRouter.patch('/cards/:id', isAuthenticated);
// userRouter.delete('/cards/:id', isAuthenticated);

export default userRouter;
