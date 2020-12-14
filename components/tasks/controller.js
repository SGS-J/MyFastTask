import taskModel from './model';

export default {
   async createTask(req, res) {
      const { title, description, userId } = req.body;
      await taskModel.createTask({
         title,
         description,
         userId,
      });
      res.send('Task saved!');
   },
   async getTask(req, res) {
      const task = await taskModel.getTask(req.params.id);
      if (task) res.json(task);
      else res.json({ errorMessage: "This task doesn't exist..." });
   },
   async getAllTasks(req, res) {
      const tasks = await taskModel.getAllTasks();
      if (tasks) res.json(tasks);
      else res.json({ errorMessage: 'There are not tasks yet...' });
   },
   async removeTask(req, res) {
      await taskModel.deleteTask(req.params.id);
      res.send('Task deleted!');
   },
   async updateTask(req, res) {
      const { title, description } = req.body;
      await taskModel.updateTask(req.params.id, {
         title,
         description,
      });
      res.send('Task updated!');
   },
};
