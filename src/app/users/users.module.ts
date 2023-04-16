import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule],
  exports: [
    LoginComponent, // it is mandatory to export from here and import in ts file of module/ component's ts file
    SignupComponent,
    
  ],
})
export class UsersModule {}
