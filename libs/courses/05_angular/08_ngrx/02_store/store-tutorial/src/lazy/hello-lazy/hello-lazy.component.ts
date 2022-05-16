import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-lazy',
  template: `
    <p>
      hello-lazy works!
    </p>
  `,
  styles: [
  ]
})
export class HelloLazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
