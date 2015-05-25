var proxyquire = require('proxyquire'),
    testConfig = require('./test-config'),
    app = proxyquire('../server.js', { './config.js': testConfig }),
    monk = require('monk'),
    db = monk(testConfig.db.name),
    wrap = require('co-monk');

module.exports.app = app;

// TODO: Give a convenience method here for inserting test data to the db
module.exports.data = {
  collection: function*(name, defaultData) {
    var collection = wrap(db.get(name)),
        res = {
          drop: function*() {
            return yield collection.drop();
          }
        };

    // Remove existing records
    yield collection.remove({});

    if(defaultData) {
      if(Array.isArray(defaultData)) {
        res.data = yield defaultData.map(function(d) {
          return collection.insert(d);
        });
      } else {
        res.data = yield collection.insert(defaultData);
      }
    }

    return res;
  }
};
