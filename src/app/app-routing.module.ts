import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: (): Promise<any> => import('./pages/customers/customers.module').then((module) => module.CustomersModule),
  },
  {
    path: '**',
    redirectTo: 'clientes'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
