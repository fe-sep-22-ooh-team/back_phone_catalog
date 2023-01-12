import { Response } from 'express';
import { RequestWithResult } from '../middleware/pagination';
import { newPhones, getDiscounted, getById } from '../services/goods';

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

export const getOne = (req: any, res: Response) => {
  const url = req.url;
  const splitedUrl = url.split('/');
  const phoneId = splitedUrl[splitedUrl.length - 1];

  const phoneInfo = getById(phoneId);

  res.json(phoneInfo);
};
