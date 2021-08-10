/**
 * The reducer to manage the changes in the TodoState
 */

import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
import { setTasks } from './todo.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { Task } from './task.model';

export const todoAdapter = createEntityAdapter<Task>();

export const todoReducer = createReducer<TodoState>(
  todoAdapter.getInitialState(),
  on(setTasks, (state, action) => todoAdapter.setAll(action.tasks, state))
)
