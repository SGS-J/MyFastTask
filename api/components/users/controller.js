import userModel from "./model";

export default {
   addUser(req, res) {
      userModel.addUser({
         name: req.body.name,
      })
   },
   authUser(req, res) {},
   getUser(req, res) {},
   updateUser(req, res) {
   },
   removeUser(req, res) {},
};
