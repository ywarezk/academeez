/**
 * Effects can help us separate the business logic from the UI.
 * This effect will manage the grabbing of the tasks from the server
 * tasks will be grabbed oninit
 * tasks will be refreshed every minute
 * task will be grabbed when a component wants to read the new tasks
 */

import { Injectable } from '@angular/core';
import { OnInitEffects, createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetchTasks, setTasks } from './todo.actions';
import { map, mergeMap } from 'rxjs/operators';
import { TodoService } from './todo.service';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEffects implements OnInitEffects {

  /**
   * When effect is added fetch all the tasks from the server
   * @returns
   */
  ngrxOnInitEffects(): Action {
    return fetchTasks();
  }

  /**
   * fetch the tasks from the server
   */
  fetchTasks$ = createEffect(
    () => this._actions$.pipe(
      ofType(fetchTasks),
      mergeMap(() => this._todoService.getTasks()),
      map(tasks => setTasks({tasks}))
    )
  )

  /**
   * refresh the list every second
   */
  refreshTasks$ = createEffect(
    () => interval(60000).pipe(
      map(() => fetchTasks())
    )
  )

  constructor(
    private _actions$: Actions,
    private _todoService: TodoService
  ) {}
}
