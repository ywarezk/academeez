/**
 * the data  that AppModule is adding to the state

 {
   user : any,
   layout: {
     menuLinks: string[]
   },
   settings: {
     isEmail: true
   },
   books: null
 }

 */

import { LayoutState } from "../layout/state/layout.state";

export interface AppState {
  user: any;
  layout: LayoutState,
}
