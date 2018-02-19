import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
