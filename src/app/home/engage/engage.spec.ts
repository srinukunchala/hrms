import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engage } from './engage';

describe('Engage', () => {
  let component: Engage;
  let fixture: ComponentFixture<Engage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Engage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Engage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
