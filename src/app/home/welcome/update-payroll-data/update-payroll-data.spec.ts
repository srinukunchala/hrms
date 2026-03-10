import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayrollData } from './update-payroll-data';

describe('UpdatePayrollData', () => {
  let component: UpdatePayrollData;
  let fixture: ComponentFixture<UpdatePayrollData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePayrollData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePayrollData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
