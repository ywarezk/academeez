import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Material Design</h1>

    <academeez-button-example hello="world" [world]="42" [foo]="myArr" [bar]="myObj">
      <p>
        hello <span style="color: red">world</span>
      </p>
    </academeez-button-example>

    <academeez-card-example></academeez-card-example>

    <academeez-multiple-ng-content>
      <academeez-multiple-center>
        <h1>Im the header</h1>
      </academeez-multiple-center>
      <academeez-multiple-footer>
       <p>
        I'm the footer
       </p>
      </academeez-multiple-footer>
    </academeez-multiple-ng-content>

    <academeez-checkbox-example></academeez-checkbox-example>

    <academeez-input-setters [url]="someUrl"></academeez-input-setters>

    <academeez-control-value-accessor-example [(ngModel)]="testValue"></academeez-control-value-accessor-example>

    <p>
      {{ testValue }}
    </p>

    <academeez-mixins-example></academeez-mixins-example>
  `,
})
export class AppComponent implements OnInit {
  myArr = [1,2,3]
  myObj = { hello: 'world' }

  someUrl = 'hello';

  testValue = 'hello'

  ngOnInit() {
    setTimeout(() => {
      this.someUrl = 'foo bar';
    }, 2000)
  }
}
