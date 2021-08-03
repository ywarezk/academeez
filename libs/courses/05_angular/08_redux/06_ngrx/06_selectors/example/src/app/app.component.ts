import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'academeez-root',
  template: `
    <h1>@ngrx/store Selectors</h1>

    <academeez-change-state></academeez-change-state>

    <academeez-read-state></academeez-read-state>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
