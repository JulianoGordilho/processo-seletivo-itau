import { TestBed } from '@angular/core/testing';

import { FipeMarcasService } from './fipe-marcas.service';

describe('FipeMarcasService', () => {
  let service: FipeMarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeMarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
