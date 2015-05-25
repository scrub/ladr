///<reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var fetch_1 = require('./util/fetch');
var auth_1 = require('./services/auth');
var errors_1 = require('./services/errors');
angular2_1.bootstrap(app_1.App, [fetch_1.Fetcher, auth_1.Auth, errors_1.Errors].concat(router_1.routerInjectables));
