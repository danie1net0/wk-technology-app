import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ListSalesComponent } from './components/list-sales/list-sales.component';
import { CreateSaleComponent } from './components/create-sale/create-sale.component';
import { ViewSaleComponent } from './components/view-sale/view-sale.component';
import { FormModule } from '../../shared/components/form/form.module';
import { IconsModule } from '../../shared/components/icons/icons.module';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { SaleService } from './services/sale.service';
import { CustomersResolverGuard } from './guards/customers-resolver-guard.service';
import { ProductsResolverGuard } from './guards/products-resolver-guard.service';
import { SaleResolverGuard } from './guards/sale-resolver.guard';

@NgModule({
  declarations: [
    ListSalesComponent,
    CreateSaleComponent,
    ViewSaleComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormModule,
    IconsModule,
    PaginationComponent,
  ],
  providers: [SaleService, CustomersResolverGuard, ProductsResolverGuard, SaleResolverGuard]
})
export class SalesModule { }
