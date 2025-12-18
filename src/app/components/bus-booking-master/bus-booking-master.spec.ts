import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusVendorMaster } from './bus-booking-master';

describe('VerdorMaster', () => {
  let component: BusVendorMaster;
  let fixture: ComponentFixture<BusVendorMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusVendorMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusVendorMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
