import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';
import { RegistFormComponent } from './regist-form/regist-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RegistRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [RegistComponent, RegistFormComponent]
})
export class RegistModule { }
