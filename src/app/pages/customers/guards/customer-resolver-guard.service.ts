import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CustomerService } from '../services/customer.service';
import { Customer } from '../interfaces/customer';
import { ApiResponse } from '../../../shared/interfaces/api-response';

@Injectable()
export class CustomerResolverGuard {

  public constructor(private customerService: CustomerService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Customer> {
    if (!route?.params['id']) {
      return
    }

    return this.customerService
      .show(route.params['id'])
      .pipe(
        take(1),
        map((response: ApiResponse<Customer>) => response.data)
      );
  }

}
