///<reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Router, routerInjectables} from 'angular2/router';
import {App} from './components/app/app';
import {Auth} from './services/auth';

bootstrap(App, [Auth].concat(routerInjectables));
