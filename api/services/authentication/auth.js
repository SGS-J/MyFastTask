import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userModel from '../../components/users/model';
import { matchPassword } from '../utils/encrypt';

passport.use(
   new LocalStrategy(async (username, password, done) => {
      try {
         const user = await userModel.getUser(username);
         if (!user) return done(null, false);
         if (!matchPassword(password, user.password)) return done(null, false);
         return done(null, user);
      } catch (error) {
         return done(error);
      }
   })
);
