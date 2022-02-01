import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand2',
  template: `
    <p azCdLog="Grand2 CD">grand2 works!</p>
    <button (click)="printToLog()">Click me!</button>
  `,
  styles: [],
})
export class Grand2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  printToLog() {
    console.log('click event is working!');
  }
}
