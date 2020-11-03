/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../router');

describe('Data test', () => {
  it('shoud return object', (done) => {
    supertest(router)
      .get('/data')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw done(err);
        done();
      });
  });
});
