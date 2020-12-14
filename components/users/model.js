import userDao from './DAO';

export default {
   addUser(user) {
      return userDao.addUser(user);
   },
   getUserById(id) {
      return userDao.getUserById(id);
   },
   getUser(username) {
      return userDao.getUser(username);
   },
   removeUser(id) {
      return userDao.removeUser(id);
   },
   updateUser(id, user) {
      return userDao.updateUser(id, user);
   },
};
