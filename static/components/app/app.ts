///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet, Router} from 'angular2/router';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {UserWidget} from '../user-widget/user-widget';
import {Ladr} from '../ladr/ladr';

// Annotation section
@Component({
  selector: 'app'
})
@View({
  templateUrl: 'views/components/app',
  directives: [RouterOutlet, RouterLink, Login, Signup, UserWidget]
})
@RouteConfig([{
  path: '/',
  component: Ladr,
  as: 'ladr'
}, {
  path: '/login',
  component: Login,
  as: 'login'
}])
// Component controller
export class App {
  name: string;

  constructor() {
    this.name = 'Alice';
  }
}
