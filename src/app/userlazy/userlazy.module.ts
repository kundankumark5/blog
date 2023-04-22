import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlazyRoutingModule } from './userlazy-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserlazyRoutingModule
  ]
})
export class UserlazyModule { }
