import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'academeez-multiple-center',
  host: {
    class: 'az-center'
  }
})
export class MultipleCenterDirective {}

@Directive({
  selector: 'academeez-multiple-footer',
  host: {
    class: 'az-footer'
  }
})
export class MultipleFooterDirective { }


@Component({
  selector: 'academeez-multiple-ng-content',
  template: `
    <p>
      multiple-ng-content works!
    </p>
    <ng-content select="academeez-multiple-center"></ng-content>
    <ng-content select="academeez-multiple-footer"></ng-content>
  `,
})
export class MultipleNgContentComponent {
}
