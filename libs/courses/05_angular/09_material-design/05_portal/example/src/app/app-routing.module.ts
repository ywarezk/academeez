/**
 * Module used for routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
