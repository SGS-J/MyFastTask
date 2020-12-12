import express from "express";
import logger from "morgan";
import indexRouter from "./routes/index";
import "./services/index";

const app = express();

app.use(logger('dev', {skip: (req, res) => process.env.NODE_ENV === 'test'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', indexRouter);

export default app;