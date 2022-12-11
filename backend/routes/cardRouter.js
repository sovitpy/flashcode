import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import {
  getCards,
  getCard,
  createCard,
  getRandomCard,
  getCardNum,
} from '../controllers/cardController.js';

const cardRouter = Router();

cardRouter.get('/', getCards);
cardRouter.post('/', createCard);
cardRouter.get('/random', isAuthenticated, getRandomCard);
cardRouter.get('/total', getCardNum);

export default cardRouter;
