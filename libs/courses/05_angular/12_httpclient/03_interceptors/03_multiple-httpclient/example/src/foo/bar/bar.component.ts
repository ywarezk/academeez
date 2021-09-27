import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
    <p>
      bar works!
    </p>
  `,
  styles: [
  ]
})
export class BarComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe();
  }

}
