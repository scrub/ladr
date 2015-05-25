import {Directive, Inject} from 'angular2/angular2';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {isBlank} from 'angular2/src/facade/lang';

@Directive({
  selector: '[show]',
  properties: {'show': 'show'},
  hostProperties: {
    'hide': 'class.hidden'
  }
})
export class Show {
  prevCondition: boolean;
  element: any;
  hide: boolean;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {
    this.element = elementRef.domElement;
    this.prevCondition = null;
  }

  set show(newCondition /* boolean */) {
    if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
      this.prevCondition = true;
      this.hide = false;

      //this.element.classList.remove('hidden');
    } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
      this.prevCondition = false;
      this.hide = true;

      //this.element.classList.add('hidden');
    }
  }
}
