import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import {
  getCards,
  getCard,
  createCard,
  getRandomCard,
} from '../controllers/cardController.js';

const cardRouter = Router();

cardRouter.get('/', getCards);
cardRouter.post('/', createCard);
cardRouter.get('/random', isAuthenticated, getRandomCard);

export default cardRouter;
