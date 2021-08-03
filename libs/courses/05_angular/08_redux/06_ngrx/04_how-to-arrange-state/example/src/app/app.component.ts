import { ChangeDetectionStrategy, Component, Compiler, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      How to arrange the state
    </h1>

    <a routerLink="/settings">Settings</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
