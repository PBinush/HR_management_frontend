import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentManageComponent } from './department-manage.component';

describe('DepartmentManageComponent', () => {
  let component: DepartmentManageComponent;
  let fixture: ComponentFixture<DepartmentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
