import { TestBed } from '@angular/core/testing';

import { AuthApiScrifallService } from './auth-api-scrifall.service';

describe('AuthApiScrifallService', () => {
  let service: AuthApiScrifallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthApiScrifallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
