import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Crud } from '../../../shared/classes/crud';
import { Sale } from '../interfaces/sale';
import { Product } from '../interfaces/product';
import { Customer } from '../interfaces/customer';
import { ApiResponse } from '../../../shared/interfaces/api-response';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SaleService extends Crud<Sale> {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient, `${environment.BASE_URL}/sales`)
  }

  public customers(): Observable<any> {
    this.setParams({
      without_pagination: true
    });

    return this.httpClient
      .get<ApiResponse<Customer>>(`${environment.BASE_URL}/customers`, this.httpOptions)
      .pipe(take(1));
  }

  public products(): Observable<any> {
    this.setParams({
      without_pagination: true
    });

    return this.httpClient
      .get<ApiResponse<Product>>(`${environment.BASE_URL}/products`, this.httpOptions)
      .pipe(take(1));
  }

}
