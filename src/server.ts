import express from 'express';
import cors from 'cors';
import { router as goodsRouter } from './routes/goods';
import serverless from 'serverless-http';

// const router = express.Router();
const app = express();

app.use(cors());

// router.get('/', (req, res) => {
//   res.json({
//     hello: '123',
//   });
// });

const endPoint = '/.netlify/functions/server';

app.use(endPoint, express.json(), goodsRouter);

export const handler = serverless(app);
