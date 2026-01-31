import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { formDataResolver } from './form-data-resolver';

describe('formDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => formDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
