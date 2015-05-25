///<reference path="../../typings/angular2/angular2.d.ts" />
///<reference path="../../typings/angular2/router.d.ts" />
import {Component, View} from 'angular2/angular2';
import {status, json} from '../../util/fetch';
import { Router, RouterLink } from 'angular2/router';

@Component({
  selector: 'login'
})
@View({
  templateUrl: 'views/components/login',
  directives: [RouterLink]
})
export class Login {
  constructor() {
  }

  login(event, username, password) {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then(status)
    .then(json)
    .then((response) => {
      localStorage.setItem('jwt', response.id_token);
      //this.router.parent.navigate('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
  }

  signup(event) {
    event.preventDefault();
  }
}
