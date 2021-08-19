import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/">Home page</a>
        </li>
        <li>
          <a routerLink="/about">About page</a>
        </li>
      </ul>
    </nav>

    <div id="tabs-container">
    </div>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
