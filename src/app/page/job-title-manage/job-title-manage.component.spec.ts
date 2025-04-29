import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitleManageComponent } from './job-title-manage.component';

describe('JobTitleManageComponent', () => {
  let component: JobTitleManageComponent;
  let fixture: ComponentFixture<JobTitleManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobTitleManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTitleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
