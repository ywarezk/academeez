import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular zone-less {{ counter$ | ngrxPush }}</h1>
    <button (click)="incCounter()">Incremet counter</button>
    <br />
    <mat-checkbox (change)="refresh()"
      >This doesnt work in zone-less</mat-checkbox
    >
	<app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _cd: ChangeDetectorRef) {}

  incCounter() {
    // this.counter++
    // this._cd.detectChanges()

    this.counter$.next(this.counter$.value + 1);
  }

  refresh() {
    this._cd.detectChanges();
  }
}
