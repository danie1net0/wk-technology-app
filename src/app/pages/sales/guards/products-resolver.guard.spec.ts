import { TestBed } from '@angular/core/testing';

import { ProductsResolverGuard } from './products-resolver-guard.service';

describe('ProductsGuard', () => {
  let guard: ProductsResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
