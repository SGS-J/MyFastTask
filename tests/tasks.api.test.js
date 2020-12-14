const chaiHttp = require('chai-http');
const { request } = require('chai').use(chaiHttp);
const { expect } = require('chai');
const app = require('../app').default;

const { taskDummies } = require('./fakes/dummy');

describe('Testing API tasks', function () {
   describe('GET /user/tasks', function () {
      it('Should return all tasks', function (done) {
         request(app)
            .get('/user/tasks')
            .send(taskDummies[0])
            .end((err, res) => {
               if (err) done(err);
               expect(res).to.have.status(200);
               expect(res).to.have.header('Content-type', /json/)
               expect(res.body).to.be.equal(taskDummies[0]);
               done()
            });
      });

      it('Should return a message when there is not tasks', function (done) {
         request(app)
            .get('/user/tasks')
            .end((err, res) => {
               if (err) done(err);
               expect(res).to.have.status(200);
               expect(res).to.have.header('Content-type', /json/)
               expect(res.body.errorMessage).to.equal(
                  'There are not tasks yet...'
               );
               done()
            });
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
            .send({ title: '', description: '', userId: 'ii'})
            .end((err, res) => {
               if (err) throw err;
               expect(res).to.have.status(500);
            });
      });
   });
});
