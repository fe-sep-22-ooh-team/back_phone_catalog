'use strict';

import { Request, Response, NextFunction } from 'express';
import { Phone } from '../types/Phone';

interface Result {
  next?: {
    page: number,
    limit: number,
  },
  previous?: {
    page: number,
    limit: number,
  },
  results?: Phone[],
  totalPages?: number,
  currentPage?: number,
}

export interface RequestWithResult extends Request {
  paginatedResult?: Result;
}

export const paginate = (model: Phone[] | null) => {
  return (req: RequestWithResult, res: Response, next: NextFunction) => {
    try {
      if (model === null) {
        return res.status(404).send('Error!');
      }

      let { page = 1, limit = model.length } = req.query;

      page = Number(page);
      limit = Number(limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const count = model.length;

      const result: Result = {};

      if (endIndex < model.length) {
        result.next = {
          page: page + 1,
          limit,
        };
      }

      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit,
        };
      }

      result.results = model.slice(startIndex, endIndex);

      result.totalPages = Math.ceil(count / limit);
      result.currentPage = page;

      req.paginatedResult = result;

      next();
    } catch (err: any) {
      return res.status(404).send(err.message);
    }
  };
};
