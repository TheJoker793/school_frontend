import { TestBed } from '@angular/core/testing';

import { ParentStudentService } from './parent-student.service';

describe('ParentStudentService', () => {
  let service: ParentStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
