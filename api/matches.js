var wrap = require('co-monk');

module.exports = function(db) {
  var matches = wrap(db.get('match'));

  return {
    post: function*() {
      // All fields found @ this.request.body.fields
      // TODO: Defend against mass assignment vulns
      var res = yield matches.insert(this.request.body);
      this.body = res._id;
    },
    show: function*() {
      var res = yield matches.findById(decodeURI(this.params.id));
      this.body = res;
    }
  };
};
