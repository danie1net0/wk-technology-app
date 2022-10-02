import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Crud } from '../../../shared/classes/crud';
import { Sale } from '../interfaces/sale';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SaleService extends Crud<Sale> {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient, `${environment.BASE_URL}/sales`)
  }

}
