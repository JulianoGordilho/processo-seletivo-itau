import { TestBed } from '@angular/core/testing';

import { SizeModalService } from './size-modal.service';

describe('SizeModalService', () => {
  let service: SizeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
