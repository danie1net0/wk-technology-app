import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListCustomersComponent,
  },
  {
    path: 'cadastrar',
    component: CreateCustomerComponent,
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
