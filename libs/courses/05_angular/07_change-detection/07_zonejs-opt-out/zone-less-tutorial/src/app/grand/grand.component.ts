import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <p>
      grand works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
