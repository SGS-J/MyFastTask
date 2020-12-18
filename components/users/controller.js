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
         res.send('User created satisfactorily!');
      },
   ],
   authUser: [
      passport.authenticate('local', { failureRedirect: '/user/login' }),
      (req, res) => {
         res.redirect(`/user/${req.params.id}/me`);
      },
   ],
   getUser: [
      (req, res, next) =>
         req.isAuthenticated() ? next() : res.redirect('/user/login'),
      async (req, res) => {
         const user = await userModel.getUserById(req.params.id);
         res.json({
            name: user.name,
            avatar: user.avatar,
            UIColor: user.UIColor,
         });
      },
   ],
   loginUser(req, res) {},
   updateUser(req, res) {},
};
