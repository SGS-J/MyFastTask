import taskDao from './DAO';

export default {
   createTask(task) {
      return taskDao.createTask(task);
   },
   getTask(id) {
      return taskDao.getTask(id);
   },
   getAllTasks() {
      return taskDao.getAllTasks();
   },
   deleteTask(id) {
      return taskDao.deleteTask(id);
   },
   updateTask(id, task) {
      return taskDao.updateTask(id, task);
   },
};
