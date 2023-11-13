import { TestBed } from '@angular/core/testing';

import { ApiServiceDeckService } from './api-service-deck.service';

describe('ApiServiceDeckService', () => {
  let service: ApiServiceDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
