import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salarystatement } from './salarystatement';

describe('Salarystatement', () => {
  let component: Salarystatement;
  let fixture: ComponentFixture<Salarystatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salarystatement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salarystatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
