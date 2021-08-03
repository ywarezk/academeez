import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ log() }} {{ counter$ | ngrxPush }}
    </p>
    <app-grand [counter]="counter$ | ngrxPush"></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  counter$: Observable<number> = interval(1000);

  log() {
    console.log('running cd on ChildComponent');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
