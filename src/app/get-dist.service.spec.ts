import { TestBed } from '@angular/core/testing';

import { GetDistService } from './get-dist.service';

describe('GetDistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDistService = TestBed.get(GetDistService);
    expect(service).toBeTruthy();
  });
});
