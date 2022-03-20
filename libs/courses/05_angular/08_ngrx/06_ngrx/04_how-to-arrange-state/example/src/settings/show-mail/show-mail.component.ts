import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-mail',
  template: ` <p>show-mail works! {{ email$ | async }}</p> `,
})
export class ShowMailComponent {
  email$: Observable<string> = this._store.pipe(
    map((state: any) => {
      console.log(state);
      return state.settings.email.email;
    })
  );

  constructor(private _store: Store) {}
}
