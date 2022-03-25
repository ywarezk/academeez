import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    NgCommonModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule]
})
export class CommonModule { }
