import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepeatingEventDirective } from './repeating-event.directive';
import { UserDirective } from './user.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeatingEventDirective,
    UserDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
