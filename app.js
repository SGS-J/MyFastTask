import express from 'express';
import logger from 'morgan';
import indexRouter from './routes/index';
import config from "config";
import './middleware/authentication/auth';
import passport from 'passport';
import expressSession from "express-session";

const app = express();
app.use(
   logger(config.get('LOGGER'))
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({secret: config.get('COOKIE-SECRET')}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/', indexRouter);

export default app;