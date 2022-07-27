import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-snippet01',
  template: `
    <p>
      snippet01 works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Snippet01Component {

}
