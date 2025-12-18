import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesTracking } from './fees-tracking';

describe('FeesTracking', () => {
  let component: FeesTracking;
  let fixture: ComponentFixture<FeesTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeesTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
