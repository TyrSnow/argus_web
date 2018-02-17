import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  imports: [
    CommonModule,
    NodeRoutingModule
  ],
  declarations: [ListComponent, DetailComponent, FrameComponent]
})
export class NodeModule { }
