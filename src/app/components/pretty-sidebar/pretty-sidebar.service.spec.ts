import { TestBed } from '@angular/core/testing';

import { PrettySidebarService } from './pretty-sidebar.service';

describe('PrettySidebarService', () => {
  let service: PrettySidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrettySidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
