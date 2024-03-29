import express from 'express';
import * as goodController from '../controllers/goods';
import { paginate } from '../middleware/pagination';
import * as goodsService from '../services/goods';
import { Phone } from '../types/Phone';

export const router = express.Router();

const phones: Phone[] | null = goodsService.getAll();

router.get('/products', paginate(phones), goodController.getAll);
router.get('/products/getNew', goodController.getNewGoods);
router.get('/products/getDiscounted', goodController.getDiscountedGoods);
router.get('/products/:goodId', goodController.getOne);
router.get('/', goodController.wrongRouteMassage);
// router.post('/', goodController.add);
// router.delete('/:goodId', goodController.remove);
