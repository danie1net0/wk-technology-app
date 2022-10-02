import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Sale } from '../../interfaces/sale';
import { SaleService } from '../../services/sale.service';
import { ApiPaginatedResponse } from '../../../../shared/interfaces/api-paginated-response';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
})
export class ListSalesComponent implements OnInit {

  public sales$: Observable<ApiPaginatedResponse<Sale>>

  constructor(private saleService: SaleService) { }

  public ngOnInit(): void {
    this.loadSales()
  }

  public loadSales(page: number = 1): void {
    this.sales$ = this.saleService.index({ page });
  }

  public formatTotal(total: number): string
  {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
  }

}
