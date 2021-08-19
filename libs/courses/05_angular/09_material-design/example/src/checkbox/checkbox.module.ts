import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputSettersComponent } from './input-setters/input-setters.component';
import { ControlValueAccessorExampleComponent } from './control-value-accessor-example/control-value-accessor-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MixinsExampleComponent } from './mixins-example/mixins-example.component';


@NgModule({
  declarations: [
    CheckboxExampleComponent,
    InputSettersComponent,
    ControlValueAccessorExampleComponent,
    MixinsExampleComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxExampleComponent,
    InputSettersComponent,
    ControlValueAccessorExampleComponent,
    MixinsExampleComponent
  ]
})
export class CheckboxModule { }
