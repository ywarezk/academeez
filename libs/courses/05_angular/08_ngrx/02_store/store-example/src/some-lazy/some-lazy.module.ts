import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ]),
    StoreModule.forFeature('lazyData', {
      lazy: (state = {
        books: [
          {id: 1, title: 'The Shining'}
        ]
      }) => state
    })
  ]
})
export class SomeLazyModule { }
