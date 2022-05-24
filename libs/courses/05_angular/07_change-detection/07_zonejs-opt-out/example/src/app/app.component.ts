import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Hello parent {{ counter$ | async }} {{ log() }}
    </h1>

    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter$ = interval(1000);

  log() {
    console.log('cd AppComponent');
  }
}
