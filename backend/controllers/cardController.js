import asyncHandler from 'express-async-handler';
import Card from '../models/cardModel.js';
import { AppError } from '../utils/errorUtils.js';

const getCards = asyncHandler(async (req, res, next) => {
  const cards = await Card.find({});
  res.status(200).json({
    status: 'success',
    data: cards,
  });
});

const getCard = asyncHandler(async (req, res, next) => {
  const card = await Card.findById(req.params.id);
  if (card) {
    res.json(card);
  } else {
    res.status(404);
    throw new AppError('Card not found', 404);
  }
});

const createCard = asyncHandler(async (req, res, next) => {
  const card = await Card.create(req.body);
  res.status(201).json(card);
});

export { getCards, getCard, createCard };
