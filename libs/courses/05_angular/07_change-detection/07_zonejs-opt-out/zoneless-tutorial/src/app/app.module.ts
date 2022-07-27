import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ZonelessModule } from 'az-zoneless';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ZonelessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
