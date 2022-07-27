import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Snippet01Component } from './snippet01/snippet01.component';
import { Snippet02Component } from './snippet02/snippet02.component';
import { Snippet03Component } from './snippet03/snippet03.component';
import { Snippet04Component } from './snippet04/snippet04.component';
import { CheckCDStrategyComponent } from './check-cdstrategy/check-cdstrategy.component';

@NgModule({
  declarations: [
    AppComponent,
    Snippet01Component,
    Snippet02Component,
    Snippet03Component,
    Snippet04Component,
    CheckCDStrategyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
