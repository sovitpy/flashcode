import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cardRouter from './routes/cardRouter.js';
import mongoose from 'mongoose';
import { AppError, handleError } from './utils/errorUtils.js';
import userRouter from './routes/userRouter.js';

// Middleware setup
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Defining routes
app.use('/api/v1/cards', cardRouter);
app.use('/api/v1/users', userRouter);
app.use('*', () => {
  throw new AppError('Route not found', 404);
});
app.use((err, req, res, next) => {
  handleError(err, req, res, next);
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI).then((conObj) => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server Listening at Port ${PORT}`));
});
