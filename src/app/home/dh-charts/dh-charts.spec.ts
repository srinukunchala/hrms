import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhCharts } from './dh-charts';

describe('DhCharts', () => {
  let component: DhCharts;
  let fixture: ComponentFixture<DhCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhCharts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
