import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/message/hello.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Static Module Create example</h1>

    <p>
      If you create a module and that module require additional arguments for it
      to do it's job. Then this is how you do it
    </p>
  `,
})
export class AppComponent implements OnInit {
  constructor(private _hello: HelloService) {}

  ngOnInit() {
    this._hello.sayHello();
  }
}
