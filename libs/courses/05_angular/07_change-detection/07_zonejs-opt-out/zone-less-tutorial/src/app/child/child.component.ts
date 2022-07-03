import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <button (click)="refresh()">detectChanges</button>
    <app-grand></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  refresh() {
    this._cd.detectChanges()
  }
}
