import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeListComponent } from './node-list/node-list.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NodeListComponent, NodeDetailComponent]
})
export class NodeModule { }
