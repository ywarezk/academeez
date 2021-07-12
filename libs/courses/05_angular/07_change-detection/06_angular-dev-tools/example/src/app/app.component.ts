import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Random number {{ randNumber }}</h1>
    <button (click)="regenerateNumber()"> generate number </button>

    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  randNumber = Math.random();

  regenerateNumber() {
    this.randNumber = Math.random();
  }
}
