/**
 * the different actions that relate for the todo section of the state
 * will be here
 */

import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const fetchTasks = createAction(
  '[todo] FETCH TASKS'
);

export const setTasks = createAction(
  '[todo] SET TASKS',
  props<{tasks: Task[]}>()
);
