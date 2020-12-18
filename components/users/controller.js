import userModel from './model';
import validation from '../../middleware/validator/user-validator';
import passport from 'passport';

export default {
   addUser: [
      ...validation,
      async (req, res) => {
         await userModel.addUser({
            name: req.body.username,
            password: req.body.password,
            gender: req.body.gender || 'Unknown',
            birthday: { date: req.body.birthday },
            UIColor: req.body.UIColor || 'Red',
         });
         res.send('User created successfully!')
      },
   ],
   loginUser: [
      passport.authenticate('login', { failureRedirect: '/user/login' }),
      (req, res) => {
         res.redirect(`/user/${req.body.username}/me`);
      },
   ],
   async getUser(req, res) {
      const user = await userModel.getUser(req.params.username);
      res.json({
         name: user.name,
         avatar: user.avatar,
         UIColor: user.UIColor,
      });
   },
   verifyAuthentication(req, res, next) {
      req.isAuthenticated() ? next() : res.redirect('/user/login');
   },
   updateUser(req, res) {},
};
