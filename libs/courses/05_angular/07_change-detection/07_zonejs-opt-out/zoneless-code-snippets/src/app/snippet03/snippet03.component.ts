import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet03',
  template: `
    <p>
      snippet03 works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Snippet03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
