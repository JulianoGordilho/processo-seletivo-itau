import { TestBed } from '@angular/core/testing';

import { PersonalDataFactoryService } from './personal-data-factory.service';

describe('PersonalDataFactoryService', () => {
  let service: PersonalDataFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDataFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
