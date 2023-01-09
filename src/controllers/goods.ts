import express from 'express';
import * as goodsService from '../services/goods';

export const getAll = async(req: express.Request, res: express.Response) => {
  const goods = await goodsService.getAll();

  res.send(goods);
};
