import express from 'express';
import cors from 'cors';
// import * as goodController from './controllers/goods';
// import * as colorsController from './controllers/colors';
import serverless from 'serverless-http';

const router = express.Router();
const app = express();

app.use(cors());

router.get('/', (req, res) => {
    res.json({
        'hello': '123',
    });
});

const endPoint = '/.netlify/functions/server';

app.use(endPoint, router);

export const handler = serverless(app);
