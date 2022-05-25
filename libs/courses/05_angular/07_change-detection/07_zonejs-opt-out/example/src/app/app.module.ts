import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
