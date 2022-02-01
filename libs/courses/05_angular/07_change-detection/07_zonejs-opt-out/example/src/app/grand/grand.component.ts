import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-grand',
  template: ` <p>grand works! {{ log() }} {{ counter }}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandComponent implements OnInit {
  @Input()
  counter: number = 0;

  log() {
    console.log('running cd on GrandComponent');
  }

  constructor() {}

  ngOnInit(): void {}
}
