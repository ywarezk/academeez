import { ApplicationRef, Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewContainerRef, ElementRef, Renderer2, Inject, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tabs',
  template: `
    <ng-template #tabsTemplate>
      <ul>
        <li *ngFor="let tab of tabs">
         {{ tab }}
        </li>
      </ul>
    </ng-template>
  `
})
export class TabsComponent implements AfterViewInit {
  @Input()
  tabs: string[] = [];

  @ViewChild('tabsTemplate')
  tabsTemplate: TemplateRef<unknown>;

  private _portal = new DomPortal(
    this._document.getElementById('tabs-container')
  )

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngAfterViewInit() {
    this.templatePortal = new TemplatePortal(
      this.tabsTemplate,
      this._viewContainerRef
    );
  }
}
