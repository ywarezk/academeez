import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet04',
  template: `
    <p>
      snippet04 works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Snippet04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
