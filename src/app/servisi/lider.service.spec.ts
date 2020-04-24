import { TestBed } from '@angular/core/testing';

import { LiderService } from './lider.service';

describe('LiderService', () => {
  let service: LiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
