import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { userReducer } from './state';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: userReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RouterModule.forRoot([
      { path: 'lazy', loadChildren: async () => {
        const { LazyModule } = await import('../lazy/lazy.module');
        return LazyModule;
      }}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
