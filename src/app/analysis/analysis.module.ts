import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AnalysisComponent } from './analysis.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [ListComponent, DetailComponent, AnalysisComponent]
})
export class AnalysisModule { }
