import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: (): Promise<any> => import('./pages/customers/customers.module').then((module) => module.CustomersModule),
  },
  {
    path: 'produtos',
    loadChildren: (): Promise<any> => import('./pages/products/products.module').then((module) => module.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
