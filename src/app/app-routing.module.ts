import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RoutingAdminComponent } from './routing-admin/routing-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingComponent } from './recap/routing/routing.component';
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
