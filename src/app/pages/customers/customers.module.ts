import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { FormModule } from '../../shared/components/form/form.module';
import { CpfPipe } from '../../shared/pipes/cpf.pipe';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { CustomerService } from './services/customer.service';
import { CustomerResolverGuard } from './guards/customer-resolver-guard.service';

@NgModule({
  declarations: [
    ListCustomersComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormModule,
    CpfPipe,
    PaginationComponent,
  ],
  providers: [CustomerService, CustomerResolverGuard],
})
export class CustomersModule { }
