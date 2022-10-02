import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSalesComponent } from './components/list-sales/list-sales.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListSalesComponent,
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
