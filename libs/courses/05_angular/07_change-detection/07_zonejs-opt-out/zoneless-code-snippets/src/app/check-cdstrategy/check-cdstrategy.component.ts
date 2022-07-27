import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-cdstrategy',
  templateUrl: './check-cdstrategy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckCDStrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
