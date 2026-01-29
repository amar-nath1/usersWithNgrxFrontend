import { TestBed } from '@angular/core/testing';

import { ApiMethods } from './api-methods';

describe('ApiMethods', () => {
  let service: ApiMethods;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMethods);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
