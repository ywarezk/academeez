import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>How to work without Zone.js {{ log() }}</h1>
    <p>
      <!-- {{ counter$ | ngrxPush }} -->
    </p>
    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent /*implements OnInit*/ {
  // counter$: Observable<number> = interval(1000);

  log() {
    console.log('running cd on AppComponent');
  }

  // constructor(private _cd: ChangeDetectorRef) {}

  // ngOnInit() {
  //   setInterval(() => {
  //     console.log('timer is running');
  //     this._cd.detectChanges();
  //   }, 3000)
  // }
}
