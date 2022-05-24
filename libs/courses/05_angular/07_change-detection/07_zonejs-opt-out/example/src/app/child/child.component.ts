import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ log() }}
    </p>

    <button (click)="noop()">
      click me - child
    </button>

    <app-grand><app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  log() {
    console.log('cd ChildComponent');
  }

  noop() {
    console.log('clicked the button in child');
	  this._cd.detectChanges();
  }

}
