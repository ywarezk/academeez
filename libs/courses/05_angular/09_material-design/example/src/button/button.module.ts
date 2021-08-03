import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ButtonExampleComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ButtonExampleComponent]
})
export class ButtonModule { }
