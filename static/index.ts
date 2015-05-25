///<reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Injectable, Inject} from 'angular2/di';
import {ListWrapper} from 'angular2/src/facade/collection';
import {Router, routerInjectables} from 'angular2/router';
import {App} from './components/app/app';
import {Fetcher} from './util/fetch';
import {Auth} from './services/auth';
import {Errors} from './services/errors';

bootstrap(App, [Fetcher, Auth, Errors].concat(routerInjectables));

