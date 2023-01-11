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

const sortPhones = (sortType: string, phones: Phone[]) => {
  if (sortType !== 'default') {
    phones.sort((phoneOne, phoneTwo) => {
      switch (true) {
      case sortType.includes('Age'):
        return +phoneOne.year - +phoneTwo.year;

      case sortType.includes('Price'):
        return +phoneOne.price - +phoneTwo.price;

      case sortType.includes('Name'):
        return phoneOne.name.localeCompare(phoneTwo.name);
      default:
        return 0;
      }
    });
  }

  if (sortType.includes('desc')) {
    return phones.reverse();
  }

  return phones;
};

export const paginate = (model: Phone[] | null) => {
  return (req: RequestWithResult, res: Response, next: NextFunction) => {
    try {
      if (model === null) {
        return res.status(404).send('Error!');
      }

      const {
        pageParam = 1,
        limitParam = model.length,
        sortByParam = 'default',
      } = req.query;

      const page = Number(pageParam);
      const limit = Number(limitParam);
      const sortBy = sortByParam + '';

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

      result.results = sortPhones(sortBy, model.slice(startIndex, endIndex));

      result.totalPages = Math.ceil(count / limit);
      result.currentPage = page;

      req.paginatedResult = result;

      next();
    } catch (err: any) {
      return res.status(404).send(err.message);
    }
  };
};
