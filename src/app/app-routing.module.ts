import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'analysis', loadChildren: 'app/analysis/analysis.module#AnalysisModule' },
  { path: 'stocks', loadChildren: 'app/stock/stock.module#StockModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'regist', loadChildren: 'app/regist/regist.module#RegistModule' },
  { path: '',   redirectTo: '/regist', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
