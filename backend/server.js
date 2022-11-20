import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cardRouter from './routes/cardRouter.js';
import mongoose from 'mongoose';

// Middleware setup
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Defining routes
app.use('/api/v1/cards', cardRouter);

// Connect to MongoDB

mongoose.connect(MONGODB_URI).then((conObj) => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server Listening at Port ${PORT}`));
});
