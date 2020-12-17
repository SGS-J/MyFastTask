import express from 'express';
import logger from 'morgan';
import indexRouter from './routes/index';
import config from "config";
import './services/authentication/auth';

const app = express();
app.use(
   logger('dev', {
      skip: (req, res) => config.util.getEnv('NODE_ENV') === 'test',
   })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

export default app;