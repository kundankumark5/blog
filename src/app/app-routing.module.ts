import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RoutingAdminComponent } from './routing-admin/routing-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingComponent } from './recap/routing/routing.component';

console.warn(
  'will load every time ,  earlier while if it would be in lazy loading it was called when lazy load module called  '
);

const routes: Routes = [
  {
    path: 'routingDemo',
    component: RoutingDemoComponent,
  },
  {
    path: 'routingAdmin',
    component: RoutingAdminComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
  },
  {
    path: 'lazyloading',
    loadChildren: () =>
      import('./lazyloading/lazyloading.module').then(
        (mod) => mod.LazyloadingModule
      ),
  },
  {
    path: 'userLazyload',
    loadChildren: () =>
      import('./userlazy/userlazy.module').then((mod) => mod.UserlazyModule),
  },

  // {
  //   path: '**', // ** is called wildCard(the page that doesn't exists so it will call every time when user request for a page not available)
  //   component: PageNotFoundComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
