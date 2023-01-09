import { Response } from 'express';
import { RequestWithResult } from '../middleware/pagination';

export const getAll = (req: RequestWithResult, res: Response) => {
  res.json(req.paginatedResult);
};
