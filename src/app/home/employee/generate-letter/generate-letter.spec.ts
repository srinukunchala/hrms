import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLetter } from './generate-letter';

describe('GenerateLetter', () => {
  let component: GenerateLetter;
  let fixture: ComponentFixture<GenerateLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
