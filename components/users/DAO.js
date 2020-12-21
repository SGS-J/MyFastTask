import UserCollection from '../../services/mongoDb/schemas/User.schema';

export default {
   async addUser(user) {
      await new UserCollection(user).save().catch(() => false);
   },
   async getUserById(id) {
      return await UserCollection.findById(id).catch(() => false);
   },
   async getUserByName(username) {
      return await UserCollection.findOne({ name: username }).catch(() => false);
   },
   async removeUser(id) {
      await UserCollection.findByIdAndDelete(id).catch(() => false);
   },
   async updateUser(id, user) {
      await UserCollection.findByIdAndUpdate(id, user).catch(() => false);
   },
   async getUserTasksMade(id) {
      const user = await this.getUserById(id).catch(() => false);
      return user.getTasksMade();
   },
};
