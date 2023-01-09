import express from 'express';
import * as goodController from '../controllers/goods';
import { paginate } from '../middleware/pagination';
import * as goodsService from '../services/goods';

const phones = goodsService.getAll();

export const router = express.Router();

router.get('/', paginate(phones), goodController.getAll);
// router.get('/:goodId', goodController.getOne);
// router.post('/', goodController.add);
// router.delete('/:goodId', goodController.remove);
