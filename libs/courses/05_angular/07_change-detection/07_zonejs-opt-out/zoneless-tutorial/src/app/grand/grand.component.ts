import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-grand',
  template: `
    <p>
      grand works! {{ log() }}
    </p>
    <mat-checkbox>check if material is working</mat-checkbox>
    <button (azClick)="doSomething()">Performance click</button>
    <p>
      {{ counter$ | ngrxPush }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent {
  // 0---1----2---3
  public counter$ = interval(1000);

  constructor() { }



  log() {
    console.log('CD GrandComponent');
  }

  doSomething() {
    // console.log(Zone.current.name);
    console.log('doSomething')
  }

}
