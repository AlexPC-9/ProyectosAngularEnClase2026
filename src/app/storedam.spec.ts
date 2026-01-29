import { TestBed } from '@angular/core/testing';

import { Storedam } from './storedam';

describe('Storedam', () => {
  let service: Storedam;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storedam);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
