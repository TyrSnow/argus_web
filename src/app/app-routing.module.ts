import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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