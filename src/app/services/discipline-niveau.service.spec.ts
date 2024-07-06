import { TestBed } from '@angular/core/testing';

import { DisciplineNiveauService } from './discipline-niveau.service';

describe('DisciplineNiveauService', () => {
  let service: DisciplineNiveauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplineNiveauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
