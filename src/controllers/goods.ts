import express from 'express';
import * as goodsService from '../services/goods';

export const getAll = async(req: express.Request, res: express.Response) => {
  const phones = await goodsService.getAll();

  try {
    const { page = 1, limit = 8 } = req.query;

    const startIndex = (+page - 1) * +limit;
    const endIndex = +page * +limit;

    const currentPhones = phones.slice(startIndex, endIndex);

    const count = phones.length;

    res.json({
      currentPhones,
      totalPages: Math.ceil(count / +limit),
      currentPage: page,
    });
  } catch (err: any) {
    return res.status(404).send(err.message);
  }
};
