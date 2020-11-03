/* eslint-disable no-undef */
const supertest = require('supertest');
const assert = require('assert');
const router = require('../router');
const data = require('../data.json');

describe('GET data test', () => {
  it('Should return object', (done) => {
    supertest(router)
      .get('/data')
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) throw done(err);
        done();
      });
  });

  it('Should return status 200', (done) => {
    supertest(router)
      .get('/data')
      .expect(200)
      .end((err) => {
        if (err) throw done(err);
        done();
      });
  });

  it('Should return same data in database', (done) => {
    supertest(router)
      .get('/data')
      .expect((res) => {
        assert.deepStrictEqual(res.body, data);
      })
      .end((err) => {
        if (err) throw done(err);
        done();
      });
  });
});
