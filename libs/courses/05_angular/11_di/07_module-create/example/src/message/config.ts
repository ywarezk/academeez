import { InjectionToken } from '@angular/core';

export interface MessageModuleConfig {
  message: string;
}

export const CONFIG = new InjectionToken<MessageModuleConfig>(
  'Used to configure the message module'
);
