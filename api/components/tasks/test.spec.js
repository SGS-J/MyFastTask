const request = require('supertest')
const app = require('../../app')

describe('GET /tasks', function () {
   it('Should return all tasks', function () {
     request(app).get('/tasks').expect(200);
   }) 
})