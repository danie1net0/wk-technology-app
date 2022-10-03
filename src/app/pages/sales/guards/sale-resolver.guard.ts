import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { SaleService } from '../services/sale.service';
import { Sale } from '../interfaces/sale';
import { ApiResponse } from '../../../shared/interfaces/api-response';

@Injectable()
export class SaleResolverGuard {

  public constructor(private saleService: SaleService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Sale> {
    if (!route?.params['id']) {
      return
    }

    return this.saleService
      .show(route.params['id'])
      .pipe(
        take(1),
        map((response: ApiResponse<Sale>) => response.data)
      );
  }

}
