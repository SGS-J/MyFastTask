const { expect } = require('chai');
const config = require('config');

const UserModel = require('../components/users/schema').default;
const TaskModel = require('../components/tasks/schema').default;
const { userDummy, taskDummies } = require('./mocks/dummy');

const db = require('mongoose') || null;
const env = config.util.getEnv('NODE_ENV');

(env === 'test-db' ? describe : describe.skip)('Database testing', function () {
   before(async function () {
      const URI = config.get('DB_CONFIG.TEST_URI');
      const CONNECT_CONF = config.get('DB_CONFIG.CONNECT_CONFIG');
      await db.connect(URI, CONNECT_CONF);
      TaskModel.deleteMany();
      for (const dummy in taskDummies) {
         await new TaskModel(taskDummies[dummy]).save();
      }
      await new UserModel(userDummy).save();
   });

   it('Adding data and fetching should does not have errors', async function () {
      const tasks = await TaskModel.find();
      const user = await UserModel.find();
      expect(tasks).to.have.lengthOf(3);
      expect(user).to.have.lengthOf(1);
   });

   after(async function () {
      await db.connection.dropDatabase();
      await db.connection.close();
   });
});
