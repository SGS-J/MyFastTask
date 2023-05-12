import express from "express";
import logger from "morgan";
import config from "config";
import passport from "passport";
import indexRouter from "./routes/index.js";
import errorHandler from "./middleware/error-handler.js";
import cookieConfig from "./middleware/authentication/cookie.js";
import corsMiddleware from "./middleware/cors.js";
import "./middleware/authentication/index.js";

const app = express();
app.use(corsMiddleware());
app.use(logger(config.get("logger")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieConfig());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", errorHandler);
app.use("/", indexRouter);

app.locals.userLogged = "";

export default app;
