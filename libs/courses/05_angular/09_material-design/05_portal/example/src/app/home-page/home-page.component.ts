import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <p>home-page works!</p>
    <app-tabs [tabs]="['foo', 'bar']"></app-tabs>
  `,
  styles: [],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
