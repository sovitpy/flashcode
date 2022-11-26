import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { AppError } from '../utils/errorUtils.js';

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    next(
      new AppError(
        'You are not logged in. Please login to access this route.',
        401
      )
    );
  }

  const decodedData = jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err, decodedData) => {
      if (err) {
        next(new AppError('Invalid token', 401));
        console.log('here!');
      } else {
        req.user = await User.findById(decodedData.id);
        next();
      }
    }
  );
});

export { isAuthenticated };
