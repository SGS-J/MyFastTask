const request = require('supertest');
const should = require('chai').should()
const config = require('config');
const app = require('../app').default;

const { taskDummy } = require('./dummy');
const TaskModel = require('../components/tasks/schema').default;

const db = require('mongoose');
const URI = config.get('DB_CONFIG.TEST_URI');
const CONNECT_CONF = config.get('DB_CONFIG.CONNECT_CONFIG');

async function fillDb() {
   for (const dummy in taskDummy) {
      await new TaskModel(taskDummy[dummy]).save();
   }
}

describe('Testing API tasks', function () {
   before(async function () {
      await db.connect(URI, CONNECT_CONF);
      await fillDb();
   });

   describe('GET /tasks', function () {
      it('Should return all tasks', function () {
         request(app)
            .get('/tasks')
            .expect('Content-type', /json/)
            .expect(taskDummy)
            .expect(200);
      });

      before(function () {
         TaskModel.deleteMany();
      });

      it('Should return a message when there is not tasks', function () {
         request(app)
            .get('/tasks')
            .expect('Content-type', /json/)
            .expect({ errorMessage: 'There are not tasks yet...' })
            .expect(200);
      });

      after(async function () {
         await fillDb();
      });
   });

   describe('POST /tasks', function () {
      it('Adding a task should works correctly', function () {
         request(app)
      });
   });

   after(async function () {
      await db.connection.dropDatabase();
      await db.connection.close();
   });
});
