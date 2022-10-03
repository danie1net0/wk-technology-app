import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSalesComponent } from './components/list-sales/list-sales.component';
import { CreateSaleComponent } from './components/create-sale/create-sale.component';
import { ViewSaleComponent } from './components/view-sale/view-sale.component';
import { CustomersResolverGuard } from './guards/customers-resolver-guard.service';
import { ProductsResolverGuard } from './guards/products-resolver-guard.service';
import { SaleResolverGuard } from './guards/sale-resolver.guard';

const routes: Routes = [
  {
    path: 'listar',
    component: ListSalesComponent,
  },
  {
    path: 'cadastrar',
    component: CreateSaleComponent,
    resolve: {
      customers: CustomersResolverGuard,
      products: ProductsResolverGuard,
    },
  },
  {
    path: 'visualizar/:id',
    component: ViewSaleComponent,
    resolve: {
      sale: SaleResolverGuard,
    },
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
