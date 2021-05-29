import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
