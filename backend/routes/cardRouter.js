import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import {
  getCards,
  getCard,
  createCard,
} from '../controllers/cardController.js';

const cardRouter = Router();

cardRouter.get('/', getCards);
cardRouter.post('/', createCard);

export default cardRouter;
