import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyle } from './ng-style-ex';

describe('NgStyle', () => {
  let component: NgStyle;
  let fixture: ComponentFixture<NgStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
