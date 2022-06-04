import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ counter }}
    </p>
    <button (click)="incCounter()">
      Click to increment couter
    </button>
	  <app-grand></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent{
  counter = 0;

  constructor() { }

  incCounter() {
    this.counter++;
  }

}
