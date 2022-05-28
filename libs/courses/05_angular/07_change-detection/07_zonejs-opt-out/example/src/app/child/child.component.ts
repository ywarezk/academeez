import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{ counter$ | ngrxPush }}
    </p>
  `,
})
export class ChildComponent {
  counter$ = new BehaviorSubject(1);
}
