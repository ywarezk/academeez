import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { FooRoutingModule } from './foo-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    FooRoutingModule,
    HttpClientModule
  ]
})
export class FooModule { }
