/**
 * If component envolves multiple directives as well
 * We can use the encapsulate with module trick
 */

import { NgModule } from '@angular/core';
import { MultipleCenterDirective, MultipleFooterDirective, MultipleNgContentComponent } from './multiple-ng-content.component';

@NgModule({
  declarations: [
    MultipleNgContentComponent,
    MultipleCenterDirective,
    MultipleFooterDirective
  ],
  imports: [  ],
  exports: [
    MultipleNgContentComponent,
    MultipleCenterDirective,
    MultipleFooterDirective
  ],
  providers: [],
})
export class MultipleNgContentModule {}
