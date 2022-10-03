import { TestBed } from '@angular/core/testing';

import { SaleResolverGuard } from './sale-resolver.guard';

describe('SaleResolverGuard', () => {
  let guard: SaleResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaleResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
