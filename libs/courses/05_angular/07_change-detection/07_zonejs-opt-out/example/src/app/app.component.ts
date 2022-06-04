import { AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef | null = null;

  counter = 0;

  createThis = ChildComponent;

  constructor(private readonly _ngZone: NgZone) {}

  incCounter() {
    this.counter++;
  }
}
