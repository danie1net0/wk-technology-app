import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SaleService } from '../../services/sale.service';
import { Sale } from '../../interfaces/sale';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit {

  public sale: Sale;

  public constructor(
    private saleService: SaleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public get total(): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.sale.total);
  }

  public ngOnInit(): void {
    this.sale = this.activatedRoute.snapshot.data['sale']
  }

  public formatPrice(unitValue: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(unitValue);
  }

}
