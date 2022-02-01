import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BarComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class FooRoutingModule {}
