import { TestBed } from '@angular/core/testing';

import { FipeAnoService } from './fipe-ano.service';

describe('FipeAnoService', () => {
  let service: FipeAnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeAnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
