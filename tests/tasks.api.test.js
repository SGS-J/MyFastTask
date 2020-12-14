const chaiHttp = require('chai-http');
const { request } = require('chai').use(chaiHttp);
const expect = require('chai').expect;
const config = require('config');
const app = require('../app').default;

const { taskDummies } = require('./dummy');
const TaskModel = require('../components/tasks/schema').default;

const db = require('mongoose');
const URI = config.get('DB_CONFIG.TEST_URI');
const CONNECT_CONF = config.get('DB_CONFIG.CONNECT_CONFIG');

async function fillDb() {
   for (const dummy in taskDummies) {
      await new TaskModel(taskDummies[dummy]).save();
   }
}

describe('Testing API tasks', function () {
   before(async function () {
      await db.connect(URI, CONNECT_CONF);
      await fillDb();
   });

   describe('GET /user/tasks', function () {
      it('Should return all tasks', function () {
         request(app)
            .get('/user/tasks')
            .expect('Content-type', /json/)
            .expect((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(200);
               expect(res.body).to.equal(taskDummies);
            });
      });

      before(function () {
         TaskModel.deleteMany();
      });

      it('Should return a message when there is not tasks', function () {
         request(app)
            .get('/user/tasks')
            .expect('Content-type', /json/)
            .end((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(200);
               expect(res.body.errorMessage).to.equal(
                  'There are not tasks yet...'
               );
            });
      });

      after(async function () {
         await fillDb();
      });
   });

   describe('POST /user/tasks', function () {
      it('Adding a task should works correctly', function () {
         request(app)
            .post('/user/tasks')
            .send(taskDummies[0])
            .end((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(200);
               expect(res.text).to.equal('Task saved!');
            });
      });

      it('Sending incorrect data should responds with an error', function () {
         request(app)
            .post('/user/tasks')
            .send({
               title: 'Hi',
               description: '',
               userId: 'ii',
               corrupt: 'lmao',
            })
            .end((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(500);
            });
      });

      it('Should responds with an error if the task does not have a title', function () {
         request(app)
            .post('/user/tasks')
            .send({ title: '', description: '', userId: 'ii', corrupt: 'lmao' })
            .end((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(500);
            });
      });
   });

   after(async function () {
      await db.connection.dropDatabase();
      await db.connection.close();
   });
});
