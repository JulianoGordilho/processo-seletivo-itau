import { TestBed } from '@angular/core/testing';

import { FipeModeloVersaoService } from './fipe-modelo-versao.service';

describe('FipeModeloVersaoService', () => {
  let service: FipeModeloVersaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeModeloVersaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
