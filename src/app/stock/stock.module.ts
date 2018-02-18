import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule
  ],
  declarations: [ListComponent, DetailComponent, FrameComponent]
})
export class StockModule { }
