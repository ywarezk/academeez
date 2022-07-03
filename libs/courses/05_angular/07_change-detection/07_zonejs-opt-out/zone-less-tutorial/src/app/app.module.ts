import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveComponentModule } from '@ngrx/component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, GrandComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule, ReactiveComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
