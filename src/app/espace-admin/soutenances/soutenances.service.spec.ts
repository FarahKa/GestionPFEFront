import { TestBed } from '@angular/core/testing';

import { SoutenancesService } from './soutenances.service';

describe('SoutenancesService', () => {
  let service: SoutenancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoutenancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
