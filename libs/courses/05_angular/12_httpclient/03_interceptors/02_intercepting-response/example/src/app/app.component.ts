import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Intercepting Response
    </h1>

    <p>
      We can intercept the response, which is useful when we have
      common actions we want to perform upon certain requests.
    </p>

    <p>
      In this example I navigate the user to the login page if I'm getting
      a 401 response
    </p>

    <button (click)="sendUnauthorizedRequest()">
      Send Unauthorized Request
    </button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private _http: HttpClient) {}

  sendUnauthorizedRequest() {
    this._http.get('https://academeez-login-ex.herokuapp.com/api/tasks').subscribe();
  }
}
