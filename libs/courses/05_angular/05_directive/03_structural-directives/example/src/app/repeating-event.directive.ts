import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRepeatingEvent]'
})
export class RepeatingEventDirective {

  @Output('appRepeatingEvent')
  clickWithLog: EventEmitter<Event> = new EventEmitter()

  constructor() { }

  @HostListener('click', ['$event'])
  clickWithExtra(event: Event) {
    console.log('extra logic');
    this.clickWithLog.emit(event);
  }


}
