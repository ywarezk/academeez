/**
 * Define the interface for the AppState
 */

import { TodoState } from "./todo/todo.state";

export interface AppState {
  todo: TodoState;
}
