import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    VisitorsRoutingModule
  ]
})
export class VisitorsModule { }
