import { TestBed } from '@angular/core/testing';

import { PreviousShoolService } from './previous-shool.service';

describe('PreviousShoolService', () => {
  let service: PreviousShoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousShoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
