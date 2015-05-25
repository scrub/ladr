import {Inject} from 'angular2/angular2';
import {Fetcher} from '../util/fetch';

export class Auth {
  authenticated = false;

  constructor(@Inject(Fetcher) public fetcher: Fetcher) {}

  login(user, pass, done, onErr) {
    return this.fetcher.fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'username=' + encodeURIComponent(user) +
        '&password=' + encodeURIComponent(pass)
    });
  }
}
