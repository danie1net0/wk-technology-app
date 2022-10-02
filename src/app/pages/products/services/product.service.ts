import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Crud } from '../../../shared/classes/crud';
import { Product } from '../interfaces/product';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductService extends Crud<Product> {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient, `${environment.BASE_URL}/products`)
  }

}
