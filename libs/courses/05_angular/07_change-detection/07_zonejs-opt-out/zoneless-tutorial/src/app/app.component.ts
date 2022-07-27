import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ counter }} {{ log() }}</p>
    <button (click)="increment()">increment</button>
    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter = 0;

  constructor(
    private _cd: ChangeDetectorRef,
    private _zone: NgZone
  ) {

  }

  increment() {
    this.counter++;
    console.log(this._zone);
    this._cd.detectChanges();
  }

  log() {
    console.log('CD AppComponent');
  }
}
