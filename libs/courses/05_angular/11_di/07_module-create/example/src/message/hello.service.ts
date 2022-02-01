import { Injectable, Inject } from '@angular/core';
import { CONFIG, MessageModuleConfig } from './config';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(@Inject(CONFIG) private _config: MessageModuleConfig) {}

  sayHello() {
    console.log(`got the following message in config: ${this._config.message}`);
  }
}
