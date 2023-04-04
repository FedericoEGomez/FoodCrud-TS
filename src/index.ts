import express from 'express';
import logger from 'morgan';
import cors from 'cors';
const app = express();

import indexRouter from './routers/index';
import swagger from './utils/swagger'
import connect  from './db/db';

swagger('/swagger', app);
app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use('/', indexRouter);
connect();


export default app;