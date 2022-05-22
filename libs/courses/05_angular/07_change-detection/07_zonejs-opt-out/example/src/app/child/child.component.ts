import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ log() }}
    </p>

    <button (click)="noop()">
      click me - child
    </button>

    <app-grand><app-grand>
  `
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log() {
    console.log('cd ChildComponent');
  }

  noop() {
    console.log('clicked the button in child');
  }

}
