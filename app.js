import express from 'express';
import logger from 'morgan';
import indexRouter from './routes/index';
import config from "config";
import './middleware/authentication/auth';

const app = express();
app.use(
   logger(config.get('LOGGER'))
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

export default app;