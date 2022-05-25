import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ log() }} {{ counter$ | ngrxPush }}
    </p>

    <button (click)="noop()">
      click me - child
    </button>

    <app-grand><app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  counter$ = new BehaviorSubject(1);

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  log() {
    console.log('cd ChildComponent');
  }

  noop() {
    console.log('clicked the button in child');
    this.counter$.next(this.counter$.value + 1);
	//   this._cd.markForCheck();
	  // this._cd.detectChanges();
  }

}
