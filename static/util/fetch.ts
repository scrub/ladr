import {Injectable, Inject} from 'angular2/di';
import {NgZone} from 'angular2/src/core/zone/ng_zone';

declare var fetch: (...args:any[]) => any;

@Injectable()
export class Fetcher {

  constructor(@Inject(NgZone) public zone: NgZone) {}

  fetch(uri: string, opts: any): Promise {
    return fetch(uri, opts).then((resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp.json();
      } else {
        return resp.text().then(function(text) {
          return Promise.reject(text);
        });
      }
    });
  }
}
