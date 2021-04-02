const should = require('chai').should();
const mongoose = require('mongoose');
const config = require('config');

const UserModel = require('../components/users/schema').default;
const TaskModel = require('../components/tasks/schema').default;
const { userDummy, taskDummies } = require('./dummy');

const URI = config.get('DB_CONFIG.TEST_URI');
const CONNECT_CONF = config.get('DB_CONFIG.CONNECT_CONFIG');

describe('Database testing', function () {
   before(async function () {
      await mongoose.connect(URI, CONNECT_CONF);
   });

   describe('Task database', function () {
      beforeEach(async function () {
         TaskModel.deleteMany();
         for (const dummy in taskDummies) {
            await new TaskModel(taskDummies[dummy]).save();
         }
      });

      it('New tasks should be created without errors', async function () {
         const tasks = await TaskModel.find();
         tasks.should.have.lengthOf(3);
      });

      it('Task without description should works correctly', async function () {
         const task = new TaskModel({
            title: "I'm a taks without desc",
            userId: 'ere',
         });
         await task.save();
      });
   });

   after(async function () {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
   });
});
