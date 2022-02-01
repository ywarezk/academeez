import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <app-tabs [tabs]="['hello', 'world']"></app-tabs>
    <p>about-page works!</p>
  `,
  styles: [],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
