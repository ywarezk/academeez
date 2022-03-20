/**
 * Selectors used to read data from the todo state
 */

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.state';
import { Task } from './task.model';

export const selectTodo = (state: AppState) => state.todo;

export const selectTasks = createSelector<AppState, TodoState, Task[]>(
  selectTodo,
  (todo: TodoState) => todo.tasks
);
