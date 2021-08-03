import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowMailComponent } from './show-mail/show-mail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShowMailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}
