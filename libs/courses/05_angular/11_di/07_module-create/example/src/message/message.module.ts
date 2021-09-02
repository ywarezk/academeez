import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModuleConfig, CONFIG } from './config';
import { HelloService } from './hello.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HelloService
  ]
})
export class MessageModule {
  static forRoot(config: MessageModuleConfig): ModuleWithProviders<MessageModule> {
    return {
      ngModule: MessageModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config
        }
      ]
    }
  }
}
