import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { router as goodsRouter } from './routes/goods';

const app = express();

app.use(cors());

const baseRoute = '/.netlify/functions/server';

app.use(baseRoute, goodsRouter);

export const handler = serverless(app);
