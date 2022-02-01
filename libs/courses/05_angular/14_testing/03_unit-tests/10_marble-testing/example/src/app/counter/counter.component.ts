import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Testing with complex observable</h2>
    <h1>{{ count$ | async }}</h1>
  `,
})
export class CounterComponent {
  count$ = this._counterService.getCounter();
  constructor(private _counterService: CounterService) {}
}
