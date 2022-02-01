import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'academeez-button-example',
  inputs: ['hello', 'world', 'foo', 'bar'],
  template: `
    <h1>Patterns used in MatButton</h1>

    <ng-content></ng-content>

    <button mat-raised-button color="primary">Hello Material Button</button>
  `,
})
export class ButtonExampleComponent implements OnInit {
  hello: string = '';

  ngOnInit() {
    console.log(this.hello);
  }
}
