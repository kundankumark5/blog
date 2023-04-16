import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupedModuleRoutingModule } from './grouped-module-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    GroupedModuleRoutingModule
  ]
})
export class GroupedModuleModule { }
