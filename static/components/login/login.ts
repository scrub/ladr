///<reference path="../../typings/angular2/angular2.d.ts" />
///<reference path="../../typings/angular2/router.d.ts" />
import {Component, View, Inject} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {NgZone} from 'angular2/src/core/zone/ng_zone';
import {status, json} from '../../util/fetch';
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

  constructor(@Inject(NgZone) public zone: NgZone,
              @Inject(Auth) auth: Auth,
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
          // NOTE: WTF is this zone.run bullshit! $evalAsync mkII...
          this.zone.run(() => {
            this.errors.add('Login failed');
          });
        });
  }

  signup(event) {
    event.preventDefault();
  }
}
