import userModel from './model';

export default {
   async addUser(req, res) {
      await userModel.addUser({
         name: req.body.username,
         password: req.body.password,
         gender: req.body.gender || 'Unknown',
         birthday: { date: req.body.birthday },
         UIColor: req.body.UIColor || 'Red',
      });
      res.send('User created satisfactorily!');
   },
   authUser(req, res) {},
   getUser(req, res) {},
   updateUser(req, res) {},
   removeUser(req, res) {},
};
