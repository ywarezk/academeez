import { ComponentRef, Directive, Input, NgZone, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appZoneFull]'
})
export class ZoneFullDirective<T> {

  @Input()
  set appZoneFull(comp : Type<T>) {
    this._ngZone.runOutsideAngular(() => {
      this._viewContainer.createComponent(comp)
    })
  }

  constructor(
    private readonly _viewContainer: ViewContainerRef,
    private readonly _ngZone: NgZone
  ) {}

}
