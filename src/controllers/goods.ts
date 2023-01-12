import { Response } from 'express';
import { RequestWithResult } from '../middleware/pagination';
import { newPhones, getDiscounted } from '../services/goods';

export const getAll = (req: RequestWithResult, res: Response) => {
  res.json(req.paginatedResult);
};

export const getNewGoods = (req: any, res: Response) => {
  const newGoods = newPhones();

  res.json(newGoods);
};

export const getDiscountedGoods = (req: any, res: Response) => {
  const discountedGoods = getDiscounted();

  res.json(discountedGoods);
};
