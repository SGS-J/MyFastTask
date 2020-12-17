import TaskCollection from '../../services/mongoDb/schemas/Task.schema';

export default {
   async createTask(task) {
      return await new TaskCollection(task).save().catch(() => false);
   },
   async getTask(id) {
      return await TaskCollection.findById(id).catch(() => false);
   },
   async getAllTasks() {
      return await TaskCollection.find().catch(() => false);
   },
   async deleteTask(id) {
      return await TaskCollection.findByIdAndDelete(id).catch(() => false);
   },
   async updateTask(id, task) {
      return await TaskCollection.findByIdAndUpdate(id, task).catch(() => false);
   },
};
