import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'academeez-input-setters',
  template: ` <p>input-setters works!</p> `,
})
export class InputSettersComponent {
  private _url: string = '';

  /**
   * set a server request when this change
   */
  @Input()
  set url(value: string) {
    this._url = value;

    console.log('do some logic when change');
  }
}
