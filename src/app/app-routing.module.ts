import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NodeListComponent } from './node-list/node-list.component';
import { StockListComponent } from './stock-list/stock-list.component';

const appRoutes: Routes = [
  { path: 'nodes', loadChildren: 'app/node/node.module#NodeModule' },
  { path: 'stocks', loadChildren: 'app/stock/stock.module#StockModule' },
  { path: '',   redirectTo: '/nodes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}