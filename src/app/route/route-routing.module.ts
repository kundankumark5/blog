import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

console.warn(`will load earlier since it's early loading`)
const routes: Routes = [
  {
    path: 'route',
    children: [
      { path: 'comp1', component: Comp1Component },
      { path: 'comp2', component: Comp2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
