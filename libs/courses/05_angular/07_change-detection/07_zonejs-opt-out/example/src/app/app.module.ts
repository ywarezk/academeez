import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';
import { ZoneFullDirective } from './zone-full.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent,
    ZoneFullDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
