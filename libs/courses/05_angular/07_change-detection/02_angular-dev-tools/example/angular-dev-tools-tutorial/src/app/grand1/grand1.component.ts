import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand1',
  template: `
    <p azCdLog="Grand1 CD">
      grand1 works!
    </p>
  `,
  styles: [
  ]
})
export class Grand1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
