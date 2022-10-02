import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ListSalesComponent } from './components/list-sales/list-sales.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { SaleService } from './services/sale.service';

@NgModule({
  declarations: [
    ListSalesComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    PaginationComponent,
  ],
  providers: [SaleService]
})
export class SalesModule { }
