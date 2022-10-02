import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { ApiResponse } from '../../../shared/interfaces/api-response';

@Injectable()
export class ProductResolverGuard {

  public constructor(private productService: ProductService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    if (!route?.params['id']) {
      return
    }

    return this.productService
      .show(route.params['id']).pipe(
        take(1),
        map((response: ApiResponse<Product>) => response.data)
      );
  }

}
