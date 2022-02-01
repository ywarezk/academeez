/**
 * Define the Todo section of the state
 */

import { Task } from './task.model';
import { EntityState } from '@ngrx/entity';

export interface TodoState extends EntityState<Task> {}
