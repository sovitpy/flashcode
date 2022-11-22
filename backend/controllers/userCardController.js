import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Card from '../models/cardModel.js';
import { AppError } from '../utils/errorUtils.js';
import Mongoose from 'mongoose';

const deleteInOtherArrays = asyncHandler(async (req) => {
  const user = req.user;
  const card = await Card.findById(req.params.id);
  if (req.body.cardType === 'solved') {
    user.unsolvedCards.pull(card._id);
    user.reviewCards.pull(card._id);
  } else if (req.body.cardType === 'unsolved') {
    user.solvedCards.pull(card._id);
    user.reviewCards.pull(card._id);
  } else if (req.body.cardType === 'review') {
    user.solvedCards.pull(card._id);
    user.unsolvedCards.pull(card._id);
  }
  await user.save();
});

const addCard = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const cardType = req.body.cardType;
  const card = await Card.findById(req.params.id);
  if (!card) {
    next(new AppError('Invalid Card Id', 400));
  }
  if (cardType === 'solved') {
    user.solvedCards.addToSet(card._id);
    await user.save();
    deleteInOtherArrays(req);
    res.status(200).json({
      status: 'success',
      message: 'Card added to solved',
    });
  } else if (cardType === 'unsolved') {
    user.unsolvedCards.addToSet(card._id);
    await user.save();
    deleteInOtherArrays(req);
    res.status(200).json({
      status: 'success',
      message: 'Card added to unsolved',
    });
  } else if (cardType === 'review') {
    user.reviewCards.addToSet(card._id);
    await user.save();
    deleteInOtherArrays(req);
    res.status(200).json({
      status: 'success',
      message: 'Card added to review',
    });
  } else {
    next(new AppError('Invalid Card Type', 400));
  }
});

export { addCard };
