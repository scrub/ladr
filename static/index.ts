///<reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Router, routerInjectables} from 'angular2/router';
import {App} from './components/app/app';
import {Fetcher} from './util/fetch';
import {Auth} from './services/auth';
import {Errors} from './services/errors';

bootstrap(App, [Fetcher, Auth, Errors].concat(routerInjectables));
