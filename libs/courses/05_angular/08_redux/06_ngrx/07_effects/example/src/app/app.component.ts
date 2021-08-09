import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchTasks, selectTasks, Task } from './state';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      @ngrx/effects
    </h1>

    <p>
      Using @ngrx/effects I can completly separate the business logic
      from the UI logic
    </p>

    <h1>
      List of tasks
    </h1>

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]> = this._store.select(selectTasks)

  ngOnInit() {
    this._store.dispatch(fetchTasks());
  }

  constructor(private _store: Store<AppState>) {}
}
