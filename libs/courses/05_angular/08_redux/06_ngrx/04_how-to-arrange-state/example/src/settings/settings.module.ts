import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { emailReducer } from './email/email.reducer';
import { ShowMailComponent } from './show-mail/show-mail.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [ShowMailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('settings', {
      email: emailReducer,
    }),
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
