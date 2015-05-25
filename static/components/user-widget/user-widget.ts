///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, Inject, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {Auth} from '../../services/auth';

// Annotation section
@Component({
  selector: 'user-widget'
})
@View({
  templateUrl: 'views/components/user-widget',
  directives: [NgIf, RouterLink]
})
// Component controller
export class UserWidget {
  auth: Auth;
  constructor(@Inject(Auth) auth: Auth) {
    this.auth = auth;
  }
}
