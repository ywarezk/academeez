import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-snippet02',
  template: `
    <p>
      async pipe also triggers CD {{ hello | async }}
    </p>
    <button (click)="handleClick()">
      Event will trigger cd in OnPush
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Snippet02Component {
  hello = new BehaviorSubject('world');

  // if the parent component has CD
  // and also he is changing the input
  // then this component will trigger CD as well
  @Input()
  inputCauseCd: number = 0

  /**
   * calling ChangeDetectorRef.markForCheck() will mark this component, and his ancestors as dirty in the next cd cycle
   * calling ChangeDetectorRef.detectChanges() will synchronously cd
   *   for this component and down the tree until a component with OnPush
   */
  constructor(private _cd: ChangeDetectorRef) {

  }

  /**
   * Events will trigger change detection
   */
  handleClick() {
    // after the event is triggered cd will be called
  }

}
