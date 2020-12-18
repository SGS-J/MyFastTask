const chaitHttp = require('chai-http');
const { expect } = require('chai');
const { request } = require('chai').use(chaitHttp);
const app = require('../app').default;
const db = require('./db-handler');
let requester;

const dummy = {
   username: 'Santiago',
   password: 'hello123456',
   'conf-password': 'hello123456',
   birthday: '2002-01-01',
   gender: 'Male',
   UIColor: 'Black',
};

before(async function () {
   await db.connectToDB();
   requester = request(app).keepOpen();
});

after(async function () {
   requester.close();
   await db.closeDb();
});

describe('User api testing', function () {
   describe('POST /user/register', function () {
      it('Should create a valid user', async function () {
         const res = await requester.post('/user/register').send(dummy);
         expect(res).to.have.status(200);
      });

      it('Should responds with an error if send incorrect data', async function () {
         dummy.password = 'incorrect';
         const res = await requester.post('/user/register').send(dummy);
         expect(res).to.have.status(400);
      });

      after(function () {
         dummy.password = 'hello123456'; 
      })
   });
   describe('GET /user', function () {
      it('Should auth and return the user', async function () {
         const res = await requester
            .get('/user/login')
            .type('form')
            .auth(dummy.username, dummy.password)
         
         expect(res).to.have.status(200)
         expect(res).redirectTo(`/user/?${res.params.id}/me`)
      });

      it('Should auth and return error if the user is invalid', async function () {
         const res = await requester
            .get('/user/login')
            .type('form')
            .auth(dummy.username, 'incorrect')
         
         expect(res).to.have.status(401)
      });
   });
   describe('PATCH /user', async function () {
      it('Should change an user satisfactorily', async function () {
      })
   });
});
