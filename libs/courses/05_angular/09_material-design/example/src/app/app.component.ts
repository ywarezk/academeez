import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Material Design</h1>

    <app-button-example hello="world" [world]="42" [foo]="myArr" [bar]="myObj">
      <p>
        hello <span style="color: red">world</span>
      </p>
    </app-button-example>
  `,
})
export class AppComponent {
  myArr = [1,2,3]
  myObj = { hello: 'world' }
}
