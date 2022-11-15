import { Router } from 'express';

const cardRouter = Router();

cardRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Get All Cards',
  });
});

export default cardRouter;
