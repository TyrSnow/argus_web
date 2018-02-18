import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [AdminComponent, SideBarComponent, BreadCrumbComponent]
})
export class AdminModule { }
