import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAdvance } from './reactive-advance';

describe('ReactiveAdvance', () => {
  let component: ReactiveAdvance;
  let fixture: ComponentFixture<ReactiveAdvance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveAdvance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveAdvance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
