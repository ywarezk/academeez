/**
 * The reducer to manage the changes in the TodoState
 */

import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
import { setTasks } from './todo.actions';

export const todoReducer = createReducer<TodoState>(
  {
    tasks: []
  },
  on(setTasks, (state, action) => ({...state, tasks: action.tasks}))
)
