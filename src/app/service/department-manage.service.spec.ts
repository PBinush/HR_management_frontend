import { TestBed } from '@angular/core/testing';

import { DepartmentManageService } from './department-manage.service';

describe('DepartmentManageService', () => {
  let service: DepartmentManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
