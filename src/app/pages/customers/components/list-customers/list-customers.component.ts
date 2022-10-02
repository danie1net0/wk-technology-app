import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { ApiPaginatedResponse } from '../../../../shared/interfaces/api-paginated-response';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit, OnDestroy {

  public customersSubscription: Subscription
  public customers$: Observable<ApiPaginatedResponse<Customer>>

  constructor(private customerServce: CustomerService) { }

  public ngOnInit(): void {
    this.loadCustomers()
  }

  public ngOnDestroy(): void {
    this.customersSubscription?.unsubscribe()
  }

  public loadCustomers(page: number = 1): void {
    this.customers$ = this.customerServce.index({ page })
  }

}
