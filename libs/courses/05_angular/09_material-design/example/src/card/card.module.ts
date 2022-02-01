import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExampleComponent } from './card-example/card-example.component';
import { MatCardModule } from '@angular/material/card';
import { MultipleNgContentComponent } from './multiple-ng-content/multiple-ng-content.component';
import { MultipleNgContentModule } from './multiple-ng-content/multiple-ng-content.module';

@NgModule({
  declarations: [CardExampleComponent],
  imports: [CommonModule, MatCardModule, MultipleNgContentModule],
  exports: [CardExampleComponent, MultipleNgContentModule],
})
export class CardModule {}
