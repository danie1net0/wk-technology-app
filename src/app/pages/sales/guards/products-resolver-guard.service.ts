import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { SaleService } from '../services/sale.service';
import { Product } from '../interfaces/product';
import { ApiResponse } from '../../../shared/interfaces/api-response';

@Injectable()
export class ProductsResolverGuard {

  public constructor(private saleService: SaleService) {}

  public resolve(): Observable<Product> {
    return this.saleService
      .products()
      .pipe(
        take(1),
        map((response: ApiResponse<Product>) => response.data)
      );
  }

}
