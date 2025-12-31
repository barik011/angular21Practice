import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreLess } from './read-more-less';

describe('ReadMoreLess', () => {
  let component: ReadMoreLess;
  let fixture: ComponentFixture<ReadMoreLess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadMoreLess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMoreLess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
