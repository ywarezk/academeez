import { AuthState } from "../auth/state/state";

export interface AppState {
  user: {firstName: string, lastName: string},
  auth: AuthState
}
