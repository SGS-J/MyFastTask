import expressSession from "express-session";
import config from "config";

const MAX_AGE = 60 * 60 * 8 * 1000; // 8 Hours

export default function cookieConfig() {
  return expressSession({
    secret: config.get("cookieSecret"),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: config.util.getEnv("NODE_ENV") === "production",
      maxAge: MAX_AGE,
    },
  });
}
