import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinBoard } from './bulletin-board';

describe('BulletinBoard', () => {
  let component: BulletinBoard;
  let fixture: ComponentFixture<BulletinBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletinBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletinBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
