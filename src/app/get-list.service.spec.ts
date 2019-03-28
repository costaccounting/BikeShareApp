import { TestBed } from '@angular/core/testing';

import { GetListService } from './get-list.service';

describe('GetListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListService = TestBed.get(GetListService);
    expect(service).toBeTruthy();
  });
});
