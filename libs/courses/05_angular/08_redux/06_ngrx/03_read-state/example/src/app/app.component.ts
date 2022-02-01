import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Read From Store</h1>
    <p>
      {{ message$ | async }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  message$: Observable<string> = this._store.pipe(
    map((state: any) => state.hello.message)
  );

  constructor(private _store: Store) {}
}
