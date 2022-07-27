import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ log() }}
    </p>
    <button (click)="triggerCd()">Trigger CD in child</button>
    <app-grand></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  constructor(
    private _cd: ChangeDetectorRef,
    private _app: ApplicationRef
  ) { }

  triggerCd() {
    console.log(Zone.current.name)

    // this._cd.markForCheck(); // uses zone.js this will not trigger cd in zoneless
    this._cd.detectChanges();

    // this._app.tick();
  }

  log() {
    console.log('CD ChildComponent');
  }

}
