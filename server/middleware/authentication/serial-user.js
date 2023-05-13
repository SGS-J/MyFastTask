import passport from "passport";
import userModel from "../../components/users/model.js";

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(async function (email, done) {
  try {
    const user = await userModel.getUserByEmail(email);
    done(null, user);
  } catch (error) {
    return done(error);
  }
});
