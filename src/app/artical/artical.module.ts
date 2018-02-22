import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticalRoutingModule } from './artical-routing.module';
import { ArticalComponent } from './artical.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    ArticalRoutingModule
  ],
  declarations: [ArticalComponent, ListComponent, DetailComponent]
})
export class ArticalModule { }
