import taskModel from './model';

export default {
   async createTask(req, res) {
      const saved = await taskModel.createTask({
         title: req.body.title,
         description: req.body.description || '',
         userId: req.body.userId,
      });
      if (saved) res.send('Task saved!');
      else res.send('Error saving the task');
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
      const ok = await taskModel.deleteTask(req.params.id);
      if (ok) res.send('Task deleted!');
      else res.json({ errorMessage: "This task doesn't exist..." });
   },
   async updateTask(req, res) {
      const { title, description } = req.body;
      const ok = await taskModel.updateTask(req.params.id, {
         title,
         description,
      });
      if (ok) res.send('Task updated!');
      else res.json({ errorMessage: "This task doesn't exist..." });
   },
};
