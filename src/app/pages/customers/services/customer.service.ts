import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Crud } from '../../../shared/classes/crud';
import { Customer } from '../interfaces/customer';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CustomerService extends Crud<Customer> {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient, `${environment.BASE_URL}/customers`)
  }

}
