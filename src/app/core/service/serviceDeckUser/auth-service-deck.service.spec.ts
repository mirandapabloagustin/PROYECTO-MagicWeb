import { TestBed } from '@angular/core/testing';

import { AuthServiceDeckService } from './auth-service-deck.service';

describe('AuthServiceDeckService', () => {
  let service: AuthServiceDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
