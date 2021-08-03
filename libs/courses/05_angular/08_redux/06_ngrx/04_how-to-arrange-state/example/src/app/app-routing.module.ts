import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'settings',
        loadChildren: async () => {
          const { SettingsModule } = await import('../settings/settings.module');
          return SettingsModule
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
