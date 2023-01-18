import { Response } from 'express';
import { Phone } from 'src/types/Phone';
import { RarePhone } from 'src/types/RareDataPhone';
import { RequestWithResult } from '../middleware/pagination';
import { newPhones, getDiscounted, getById } from '../services/goods';
import * as goodsService from '../services/goods';

interface GetOneResult {
  phoneInfo?: RarePhone;
  phones?: Phone[]
}

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

  const [ company, name, model ] = phoneId.split('-');
  const namespaceId = `${company}-${name}-${model}`;

  const result: GetOneResult = {};

  result.phoneInfo = getById(phoneId);

  result.phones = goodsService
    .getAll()
    .filter(phone => phone.slug.includes(namespaceId));

  res.json(result);
};

export const wrongRouteMassage = (req: any, res: Response) => {
  res.json('Hi! This is the main route. Please, read a readme.md to find out more details');
};
