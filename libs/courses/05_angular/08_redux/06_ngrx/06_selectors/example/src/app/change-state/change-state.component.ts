import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setNum } from '../state';

@Component({
  selector: 'academeez-change-state',
  template: `
    <p>
      change-state works!
    </p>
    <button (click)="changeState()">
      Click to change state
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeStateComponent {

  constructor( private _store: Store ) {}

  /**
   * this will change the state
   */
  changeState() {
    this._store.dispatch(setNum({num: Math.random()}));
  }
}
