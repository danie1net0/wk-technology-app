import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CustomerService } from './services/customer.service';
import { CpfPipe } from '../../shared/pipes/cpf.pipe';
import { FormModule } from '../../shared/components/form/form.module';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

@NgModule({
  declarations: [
    ListCustomersComponent,
    CreateCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormModule,
    CpfPipe,
    PaginationComponent,
  ],
  providers: [CustomerService],
})
export class CustomersModule { }
