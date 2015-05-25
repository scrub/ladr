var config = require('./config.js'),
    auth = require('./auth.js'),
    koa = require('koa'),
    logger = require('koa-logger'),
    session = require('koa-generic-session'),
    passport = require('koa-passport'),
    Router = require('koa-router'),
    koaBody = require('koa-body')({ formiddable: { multiples: false } }),
    serve = require('koa-static'),
    views = require('co-views'),
    render = views(__dirname + '/views', { map: { html: 'jade' }, ext: 'jade' }),
    monk = require('monk'),
    wrap = require('co-monk'),
    db = monk(config.db.name),
    matches = require('./api/matches.js')(db);


var app = module.exports = koa(),
  port = process.env.PORT || 8000,
  env = process.env.NODE_ENV || 'development';

app.use(logger());

app.keys = [process.env.SESSION_SECRET || config.sessionSecret];
// TODO: Mongo sessions
app.use(session());

app.use(serve('static'));

// BEGIN: Auth
require('./auth.js')
app.use(passport.initialize());
app.use(passport.session());
// END: Auth

// BEGIN: Public routes
var publicRoutes = new Router();

publicRoutes.get('/views/:area/:view', serveView);
publicRoutes.get('/views/:view', serveView);

function* serveView() {
  var area = this.params.area,
      view = this.params.view;

  this.body = yield render(area ? area + '/' + view : view);
}

publicRoutes.get('/', function*() {
  this.body = yield render('index');
});

publicRoutes.post('/login', koaBody, function*(next) {
  var ctx = this;
  yield* passport.authenticate('local', function*(err, user, info) {
    if (err) throw err;
    if (user === false) {
      ctx.status = 401;
      ctx.body = { success: false };
    } else {
      yield ctx.login(user);
      ctx.body = { success: true };
    }
  }).call(this, next);
});

// POST /login
/*publicRoutes.post('/login', koaBody,
  passport.authenticate('local', , function (err, user) {

    req.logIn(account, function() {

        res.status(err ? 500 : 200).send(err ? err : account);
    });
})
);*/

publicRoutes.get('/logout', function*(next) {
  this.logout();
  this.redirect('/');
});

publicRoutes.get('/auth/facebook',
  passport.authenticate('facebook')
);

publicRoutes.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/app',
    failureRedirect: '/'
  })
);

publicRoutes.get('/auth/twitter',
  passport.authenticate('twitter')
);

publicRoutes.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/app',
    failureRedirect: '/'
  })
);

publicRoutes.get('/auth/google',
  passport.authenticate('google')
);

publicRoutes.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/app',
    failureRedirect: '/'
  })
);

app.use(publicRoutes.middleware());
// END: Public routes

// BEGIN: Authenticated routes
// Require authentication for all subsequently registered middleware
app.use(function*(next) {
  if (this.isAuthenticated()) {
    yield next;
  } else {
    //yield next;
    this.redirect('/');
  }
});

var secured = new Router();

secured.post('/match', koaBody, matches.post);
secured.get('/match/:id', matches.show);

app.use(secured.middleware());
// END: Authenticated routes

/*
app
  .use(router.routes())
  .use(router.allowedMethods());
*/

app.listen(port);
console.log('app listening on port: ', port);
