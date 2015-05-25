///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'ladr'
})
@View({
  template: '<div>Check deez ladrz!</div>'
})
// Component controller
export class Ladr {
  constructor() {
  }
}
