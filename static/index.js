///<reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var auth_1 = require('./services/auth');
angular2_1.bootstrap(app_1.App, [auth_1.Auth].concat(router_1.routerInjectables));
