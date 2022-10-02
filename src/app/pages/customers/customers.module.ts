import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CustomerService } from './services/customer.service';
import { CpfPipe } from '../../shared/pipes/cpf.pipe';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    ListCustomersComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CpfPipe,
    PaginationComponent,
  ],
  providers: [CustomerService],
})
export class CustomersModule { }
