///<reference path="../../typings/angular2/angular2.d.ts" />
///<reference path="../../typings/angular2/router.d.ts" />
import {Component, View, Inject} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {Auth} from '../../services/auth';
import {ErrorList} from '../error-list/error-list';
import {Errors} from '../../services/errors';

@Component({
  selector: 'login'
})
@View({
  templateUrl: 'views/components/login',
  directives: [RouterLink, ErrorList]
})
export class Login {
  auth: Auth;
  router: Router;
  errors: Errors;

  constructor(@Inject(Auth) auth: Auth,
              @Inject(Errors) errors: Errors,
              @Inject(Router) router: Router) {
    this.auth = auth;
    this.router = router;
    this.errors = errors;
  }

  login(event, username, password) {
    event.preventDefault();

    this.errors.flush();

    this.auth
      .login(username, password)
      .then((result) => {
          this.router.parent.navigate('/');
        }, (err) => {
          this.errors.add('Incorrect username or password');
        });
  }

  signup(event) {
    event.preventDefault();
  }
}
