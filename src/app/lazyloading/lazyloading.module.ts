import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazycompComponent } from './lazycomp/lazycomp.component';
import { Lazy2compComponent } from './lazy2comp/lazy2comp.component';


@NgModule({
  declarations: [
    LazycompComponent,
    Lazy2compComponent,
   
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
