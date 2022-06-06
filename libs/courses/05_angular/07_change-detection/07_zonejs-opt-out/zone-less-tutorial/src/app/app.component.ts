import { ChangeDetectorRef, Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular zone-less {{ counter }}</h1>
    <button (click)="incCounter()">Incremet counter</button>
    <br />
    <mat-checkbox (change)="refresh()"
      >This doesnt work in zone-less</mat-checkbox
    >
  `,
})
export class AppComponent {
  counter = 0

  constructor(private _cd: ChangeDetectorRef) {}

  incCounter() {
    this.counter++
    this._cd.detectChanges()
  }

  refresh() {
    this._cd.detectChanges();
  }
}
