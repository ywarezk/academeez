import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../fibonacci.service';

@Component({
  selector: 'app-child1',
  template: `
    <h2 azCdLog="Child1 CD">
      grandchild1 {{ fibonacciService.fibonacci(40) }}
    </h2>
    <app-grand1></app-grand1>
  `,
  styles: [
  ]
})
export class Child1Component implements OnInit {

  constructor(public fibonacciService : FibonacciService) { }

  ngOnInit(): void {
  }
}
