import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsBasic } from './rx-js-basic';

describe('RxJsBasic', () => {
  let component: RxJsBasic;
  let fixture: ComponentFixture<RxJsBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
