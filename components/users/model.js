import userDao from './DAO';

export default {
   addUser(user) {
      return userDao.addUser(user);
   },
   getUserById(id) {
      return userDao.getUserById(id);
   },
   getUserByName(username) {
      return userDao.getUserByName(username);
   },
   removeUser(id) {
      return userDao.removeUser(id);
   },
   updateUser(id, user) {
      return userDao.updateUser(id, user);
   },
};
