import { Directive, Input, DoCheck } from '@angular/core';

@Directive({
  selector: '[azCdLog]',
})
export class CdLogDirective implements DoCheck {
  @Input('azCdLog')
  message: string = '';

  ngDoCheck(): void {
    console.log(this.message);
  }
}
