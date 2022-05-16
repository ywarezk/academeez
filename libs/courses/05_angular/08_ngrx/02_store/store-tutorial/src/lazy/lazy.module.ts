import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/lazy.reducer';
import { RouterModule } from '@angular/router';
import { HelloLazyComponent } from './hello-lazy/hello-lazy.component';


@NgModule({
  declarations: [
    HelloLazyComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('lazy', {
      books: booksReducer
    }),
    RouterModule.forChild([
      // /lazy
      { path: '', component: HelloLazyComponent }
    ])
  ]
})
export class LazyModule { }
