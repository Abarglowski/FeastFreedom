import { TestBed } from '@angular/core/testing';

import { PageCheckService } from './page-check.service';

describe('PageCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageCheckService = TestBed.get(PageCheckService);
    expect(service).toBeTruthy();
  });
});
