var test = require('../test-setup.js'),
    app = test.app,
    request = require('co-supertest').agent(app.listen()),
    expect = require('chai').expect;

describe('/ match', function() {
  var matches;

  beforeEach(function*() {
    matches = yield test.data.collection('match', [{ date: '' + new Date() }]);
    // Login
    yield request.post('/login').send({ username: 'test', password: 'test' }).end();
  });

  afterEach(function*() {
    yield matches.drop();
  });

  it('should return matches already in the db', function *(){
    var id = matches.data[0]._id;
    var res = yield request.get('/match/' + id).expect(200).end();
    expect(res.body._id).to.equal('' + id);
  });

  it('should save and return matches', function *(){
    var idRes = yield request.post('/match').send({ date: '' + new Date() }).end();
    var id = idRes.text.replace(/"/g, '');
    var res = yield request.get('/match/' + id).expect(200).end();
    expect(res.body._id).to.equal('' + id);
  });
});
