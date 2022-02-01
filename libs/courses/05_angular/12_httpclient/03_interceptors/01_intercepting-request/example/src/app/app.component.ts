import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Intercepting Request</h1>

    <p>
      In this example an interceptor is used to add the Content-Type header for
      all the requests
    </p>
  `,
})
export class AppComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get('http://nztodo.herokuapp.com/api/tasks/?format=json')
      .subscribe(() => {
        console.log(
          'this request is sent with the header from the intercpetor'
        );
      });
  }
}
