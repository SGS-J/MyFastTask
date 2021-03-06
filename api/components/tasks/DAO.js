import TaskCollection from './schema';

export default {
   async createTask(task) {
      await new TaskCollection(task).save().catch(() => false);
   },
   async getTask(id) {
      return await TaskCollection.findById(id).catch(() => false);
   },
   async getAllTasks() {
      return await TaskCollection.find().catch(() => false);
   },
   async deleteTask(id) {
      await TaskCollection.findByIdAndDelete(id).catch(() => false);
   },
   async updateTask(id, task) {
      await TaskCollection.findByIdAndUpdate(id, task).catch(() => false);
   },
};
