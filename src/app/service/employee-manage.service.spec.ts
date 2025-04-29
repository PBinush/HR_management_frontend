import { TestBed } from '@angular/core/testing';

import { EmployeeManageService } from './employee-manage.service';

describe('EmployeeManageService', () => {
  let service: EmployeeManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
