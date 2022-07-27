import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <p>
      grand works! {{ log() }}
    </p>
    <mat-checkbox>check if material is working</mat-checkbox>
    <button (azClick)="doSomething()">Performance click</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent {

  constructor() { }

  log() {
    console.log('CD GrandComponent');
  }

  doSomething() {
    console.log(Zone.current.name);
    console.log('doSomething')
  }

}
