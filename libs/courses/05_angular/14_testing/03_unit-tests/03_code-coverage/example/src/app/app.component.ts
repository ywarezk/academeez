import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  clickMe() {
    console.log('hello world');
  }

  clickMe2() {
    console.log('hello world');
  }
}
