///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, Inject, NgFor} from 'angular2/angular2';
import {Errors} from '../../services/errors';

// Annotation section
@Component({
  selector: 'error-list'
})
@View({
  templateUrl: 'views/components/error-list',
  directives: [NgFor]
})
// Component controller
export class ErrorList {
  constructor(@Inject(Errors) public errorService: Errors) {
  }
}
