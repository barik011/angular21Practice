import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClass } from './ng-class-ex';

describe('NgClass', () => {
  let component: NgClass;
  let fixture: ComponentFixture<NgClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
