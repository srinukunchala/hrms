import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassCommunication } from './mass-communication';

describe('MassCommunication', () => {
  let component: MassCommunication;
  let fixture: ComponentFixture<MassCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
