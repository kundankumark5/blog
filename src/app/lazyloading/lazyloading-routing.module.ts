import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazycompComponent } from './lazycomp/lazycomp.component';
import { Lazy2compComponent } from './lazy2comp/lazy2comp.component';

console.warn("will load once only while lazy load")
const routes: Routes = [
  {
    path: 'lazyload',
    children: [
      {
        path: 'lazyComp',
        component: LazycompComponent,
      },
      {
        path: 'lazy2comp',
        component: Lazy2compComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyloadingRoutingModule {}
