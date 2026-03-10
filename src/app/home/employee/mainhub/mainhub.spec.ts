import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainhub } from './mainhub';

describe('Mainhub', () => {
  let component: Mainhub;
  let fixture: ComponentFixture<Mainhub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainhub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainhub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
