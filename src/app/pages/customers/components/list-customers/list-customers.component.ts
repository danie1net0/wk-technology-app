import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { ApiPaginatedResponse } from '../../../../shared/interfaces/api-paginated-response';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements OnInit {

  public customers$: Observable<ApiPaginatedResponse<Customer>>

  constructor(private customerServce: CustomerService) { }

  public ngOnInit(): void {
    this.loadCustomers()
  }

  public loadCustomers(page: number = 1): void {
    this.customers$ = this.customerServce.index({ page });
  }

  public async confirmDeletion(id: number): Promise<void> {
    const response = await Swal.fire({
      title: 'Deletar cliente',
      text: "Esta ação será irreversível, quer continuar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    });

    if (!response.isConfirmed) {
      return;
    }

    this.deleteCustomer(id);
  }

  private deleteCustomer(id: number): void {
    this.customerServce
      .destroy(id)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private async handleSuccess(): Promise<void> {
    await Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Cliente deletado com sucesso!',
    });

    this.loadCustomers();
  }

  private async handleError(error: any): Promise<void> {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.data.message,
    });
  }

}
