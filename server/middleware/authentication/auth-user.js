import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "../../components/users/model.js";
import { matchPassword } from "../../services/security/encrypt.js";

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (username, password, done) => {
      try {
        const user = await userModel.getUserByEmail(username);
        if (!user) return done(null, false);
        if (!matchPassword(password, user.password)) return done(null, false);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
