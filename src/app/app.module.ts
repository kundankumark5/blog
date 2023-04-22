import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildArrCompComponent } from './child-arr-comp/child-arr-comp.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RoutingAdminComponent } from './routing-admin/routing-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { RecapModule } from './recap/recap.module';
import { AdminModule } from './admin/admin.module';
import { GroupedModuleModule } from './grouped-module/grouped-module.module';
import { VisitorsModule } from './visitors/visitors.module';
import { RouteModule } from './route/route.module';
import { Callinlazy1Component } from './callinlazy1/callinlazy1.component';
import { Callinlazy2Component } from './callinlazy2/callinlazy2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    ChildCompComponent,
    ChildArrCompComponent,
    ChildToParentComponent,
    RoutingDemoComponent,
    RoutingAdminComponent,
    PageNotFoundComponent,
    CustomDirectiveDirective,
    Callinlazy1Component,
    Callinlazy2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RecapModule,
    HttpClientModule,
    AdminModule,
    GroupedModuleModule,
    VisitorsModule,
    RouteModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
