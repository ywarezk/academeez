import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PushModule } from '@rx-angular/template';
import { ReactiveComponentModule } from '@ngrx/component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveComponentModule
    // PushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
