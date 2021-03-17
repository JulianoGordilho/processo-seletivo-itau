import { TestBed } from '@angular/core/testing';

import { FipeCompletoService } from './fipe-completo.service';

describe('FipeCompletoService', () => {
  let service: FipeCompletoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeCompletoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
