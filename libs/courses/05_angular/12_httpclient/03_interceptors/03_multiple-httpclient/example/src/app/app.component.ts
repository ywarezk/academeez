import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Different Interceptors for multiple HttpClient
    </h1>

    <p>
     An interceptor is attached to an instance of HttpClient.
     You can have multiple instances of HttpClient
    </p>

    <a routerLink="/foo">
      Lazy load FooModule
    </a>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe();
  }
}
