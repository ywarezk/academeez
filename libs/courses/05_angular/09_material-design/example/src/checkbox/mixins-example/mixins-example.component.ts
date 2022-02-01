import { Component, OnInit } from '@angular/core';

export function loginMixin(base: any) {
  return class WithLogin extends base {
    login(email: string, password: string) {
      console.log(`login email: ${email} login password: ${password}`);
    }
  };
}

const _BaseMixinsExample = loginMixin(class {});

@Component({
  selector: 'academeez-mixins-example',
  template: `
    <p>mixins-example works!</p>
    <button (click)="login('hello', 'world')">Login</button>
  `,
})
export class MixinsExampleComponent extends _BaseMixinsExample {}
