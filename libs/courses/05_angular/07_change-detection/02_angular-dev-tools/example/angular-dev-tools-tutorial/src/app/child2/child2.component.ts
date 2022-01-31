import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <h2 azCdLog="Child2 CD">
      Grandchild2
    </h2>
    <app-grand2></app-grand2>
  `,
  styles: [
  ]
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
