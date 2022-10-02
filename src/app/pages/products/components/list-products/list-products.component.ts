import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ApiPaginatedResponse } from '../../../../shared/interfaces/api-paginated-response';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {

  public products$: Observable<ApiPaginatedResponse<Product>>

  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.loadProducts()
  }

  public loadProducts(page: number = 1): void {
    this.products$ = this.productService.index({ page });
  }

  public formatUnitValue(unitValue: number): string
  {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(unitValue);
  }

  public async confirmDeletion(id: number): Promise<void> {
    const response = await Swal.fire({
      title: 'Deletar produto',
      text: "Esta ação será irreversível, quer continuar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    });

    if (!response.isConfirmed) {
      return;
    }

    this.deleteProduct(id);
  }

  private deleteProduct(id: number): void {
    this.productService
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
      text: 'Produto deletado com sucesso!',
    });

    this.loadProducts();
  }

  private async handleError(error: any): Promise<void> {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.data.message,
    });
  }

}
