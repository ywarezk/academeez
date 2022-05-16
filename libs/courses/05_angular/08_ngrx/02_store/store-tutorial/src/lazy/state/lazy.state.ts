/**
 * Interface that describes the state that the LazyModule is adding to ngrx state
 */

export interface LazyState {
  books: Array<{id: number, title: string}>
}
