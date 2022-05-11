import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'lazy',
        loadChildren: async () => {
          const { SomeLazyModule } = await import('../some-lazy/some-lazy.module');
          return SomeLazyModule
        }
      }
    ]),
    StoreModule.forRoot({user: (state = {
      firstName: 'Yariv',
      lastName: 'Katz'
    }) => state}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
