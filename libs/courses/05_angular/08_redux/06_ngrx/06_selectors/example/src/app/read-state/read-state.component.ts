import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectGreeting } from '../state';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'academeez-read-state',
  template: `
    <p>
      read-state works! {{ greeting$ | async }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadStateComponent {
  // this will render the component on every change of state
  // greeting$: Observable<string> = this._store.pipe(
  //   map(state => state.message.greeting)
  // )

  // this will render the component only when relevant selected area is changed
  greeting$: Observable<string> = this._store.select(selectGreeting);

  constructor(private _store: Store<AppState>) {}
}
