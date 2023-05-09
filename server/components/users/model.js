import userDao from "./DAO.js";
import userDto from "./DTO.js";

export default {
  addUser(user) {
    return userDao.addUser(user);
  },
  getUserById(id) {
    return userDao.getUserById(id);
  },
  getUserByEmail(email) {
    return userDao.getUserByEmail(email);
  },
  async updateUser(userEmail, dataToUpdate) {
    const userUpdated = await userDto.validateUpdate(dataToUpdate);
    if (!userUpdated) return false;
    return userDao.updateUser(userEmail, userUpdated);
  },
};
