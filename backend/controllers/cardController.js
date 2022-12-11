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

const getCardNum = asyncHandler(async (req, res, next) => {
  const cardNum = await Card.count();
  console.log(cardNum);
  res.status(200).json({
    status: 'success',
    data: cardNum,
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

const getRandomCard = asyncHandler(async (req, res, next) => {
  const { solvedCards, unsolvedCards, reviewCards } = req.user;
  const cards = await Card.find({
    _id: {
      $nin: [...solvedCards, ...unsolvedCards, ...reviewCards],
    },
  });
  if (cards.length === 0) {
    res.status(200).json({
      status: 'warning',
      message: 'No more cards left',
    });
  } else {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    res.status(200).json({
      status: 'success',
      data: randomCard,
    });
  }
});

export { getCards, getCard, createCard, getRandomCard, getCardNum };
