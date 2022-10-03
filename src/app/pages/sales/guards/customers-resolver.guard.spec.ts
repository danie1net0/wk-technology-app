import { TestBed } from '@angular/core/testing';

import { CustomersResolverGuard } from './customers-resolver-guard.service';

describe('CustomersGuard', () => {
  let guard: CustomersResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomersResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
