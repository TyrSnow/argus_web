import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AnalysisComponent } from './analysis.component';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ],
  declarations: [ListComponent, DetailComponent, AnalysisComponent]
})
export class AnalysisModule { }
