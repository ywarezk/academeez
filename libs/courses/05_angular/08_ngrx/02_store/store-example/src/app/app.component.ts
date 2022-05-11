import { Component, ViewChild, ViewContainerRef, NgModuleFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/lazy">
      Click to lazy load
    </a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
