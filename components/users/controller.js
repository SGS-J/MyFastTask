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
         res.send('User created successfully!');
      },
   ],
   loginUser: [
      passport.authenticate('login', { failureRedirect: '/user/login' }),
      (req, res) => {
         req.app.locals.userLogged = req.body.username;
         res.redirect(`/user/${req.body.username}/me`);
      },
   ],
   getLoginPage(req, res) {
      if(req.isAuthenticated()) res.redirect(`/user/${req.app.locals.userLogged}/me`)
      else res.end()
   },
   logoutUser(req, res) {
      req.app.locals.userLogged = '';
      req.logout();
      res.redirect('/user/login');
   },
   async getUser(req, res) {
      if(req.params.username === req.app.locals.userLogged){
         const user = await userModel.getUserByName(req.params.username);
         res.json({
            name: user.name,
            avatar: user.avatar,
            UIColor: user.UIColor,
         });
      } else {
         res.redirect(`/user/${req.app.locals.userLogged}/me`);
      }
   },
   async updateUser(req, res) {
      const { name, gender, birthday, UIColor, avatar } = req.body;
      const ok = await userModel.updateUser(req.app.locals.userLogged, {
         name,
         gender,
         birthday,
         UIColor,
         avatar,
      });
      if (ok) {
         if(name) req.app.locals.userLogged = name;
         res.send('User updated!');
      }
      else res.status(400).end();
   },
   verifyAuthentication(req, res, next) {
      req.isAuthenticated() ? next() : res.redirect('/user/login');
   },
};
