import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <p>
      grand works! {{ log() }}
    </p>
  `,
  styles: [
  ]
})
export class GrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log() {
    console.log('cd GrandComponent');
  }

}
