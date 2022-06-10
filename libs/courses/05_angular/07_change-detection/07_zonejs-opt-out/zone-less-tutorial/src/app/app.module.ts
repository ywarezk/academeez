import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule, ReactiveComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
