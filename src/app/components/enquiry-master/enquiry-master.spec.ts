import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryMaster } from './enquiry-master';

describe('Enquiry', () => {
  let component: EnquiryMaster;
  let fixture: ComponentFixture<EnquiryMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
