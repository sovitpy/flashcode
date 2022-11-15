import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cardRouter from './routes/cardRouter.js';

// Middleware setup
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Defining routes
app.use('/api/v1/cards', cardRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
