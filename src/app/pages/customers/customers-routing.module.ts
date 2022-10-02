import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from './components/list-customers/list-customers.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListCustomersComponent,
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
