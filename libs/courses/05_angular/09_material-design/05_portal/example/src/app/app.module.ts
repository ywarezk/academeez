import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { PortalModule, PortalHost } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
