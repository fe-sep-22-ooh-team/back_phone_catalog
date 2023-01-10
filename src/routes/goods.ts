import express from 'express';
import * as goodController from '../controllers/goods';
import { paginate } from '../middleware/pagination';
import * as goodsService from '../services/goods';
import { Phone } from '../types/Phone';

export const router = express.Router();

const phones: Phone[] | null = goodsService.getAll();

router.get('/products', paginate(phones), goodController.getAll);
// router.get('/:goodId', goodController.getOne);
// router.post('/', goodController.add);
// router.delete('/:goodId', goodController.remove);
