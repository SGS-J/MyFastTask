const chaiHttp = require('chai-http');
const { expect } = require('chai');
const app = require('../app').default;
const { request } = require('chai').use(chaiHttp);
const db = require('./db-handler');
let requester;

before(async function () {
   await db.connectToDB()
   requester = request(app).keepOpen();
});

after(async function () {
   requester.close();
   await db.closeDb()
});

afterEach(async function () {
   await db.cleanCollections();
});

describe('Testing API tasks', function () {
   describe('POST /user/tasks', function () {
      it('Adding a task should works correctly', async function () {
         try {
            const res = await requester
               .post('/tasks')
               .send({ title: 'sjdl', description: 'slhdfl', userId: 'uiui' });
            expect(res).to.have.status(200);
            expect(res.text).to.equal('Task saved!');
         } catch (err) {
            throw err;
         }
      });

      it('Should responds with an error if the task does not have a title', async function () {
         try {
            const res = await requester
               .post('/tasks')
               .send({ title: '', description: '', userId: 'ii' });
            expect(res.text).to.be.equal('The task needs a title at least');
         } catch (err) {
            throw err;
         }
      });
   });

   describe('GET /user/tasks', function () {
      it('Should return all tasks', async function () {
         const dummy = { title: 'AAA', description: 'FFF', userId: 'iuiiu' };
         await requester.post('/tasks').send(dummy);
         try {
            const res = await requester.get('/tasks');
            expect(res).to.have.status(200);
            expect(res).to.have.header('Content-type', /json/);
            expect(res.body[0]).to.haveOwnProperty('title');
            expect(res.body[0]).to.haveOwnProperty('description');
            expect(res.body[0]).to.haveOwnProperty('userId');
            expect(res.body[0]).to.haveOwnProperty('creationDate');
         } catch (err) {
            throw err;
         }
      });

      it('Should return a message when there is not tasks', async function () {
         try {
            const res = await requester.get('/tasks');
            expect(res).to.have.status(200);
            expect(res).to.have.header('Content-type', /json/);
            expect(res.body).to.haveOwnProperty('errorMessage');
         } catch (err) {
            throw err;
         }
      });
   });
});
