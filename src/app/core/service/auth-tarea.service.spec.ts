import { TestBed } from '@angular/core/testing';

import { AuthTareaService } from './auth-tarea.service';

describe('AuthTareaService', () => {
  let service: AuthTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
