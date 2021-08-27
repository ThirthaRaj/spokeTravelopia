var chai = require('chai');
var app = require('../app.js');
var supertest = require('supertest');
global.expect = chai.expect;
global.request = supertest(app);

describe('POST /travels', function() {
    it('saves a new travel request', function(done) {
      request.post('/travels')
        .send({
            "name":"sample",
            "email":"thirtha@yopmail.com",
            "numberOfPeople":10,
            "budget":3000,
            "destination":"India"
        })
        .expect(200)
        .end(function(err, res) {
          done(err);
        });
    });
  });


  describe('GET /travels', function() {
    // Testing how to find a task by id
    it('returns travels', function(done) {
      request.get('/travels')
        .expect(200)
        .end(function(err, res) {
          expect(200);
          done(err);
        });
    })
});