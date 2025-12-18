import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEx } from './api-ex';

describe('ApiEx', () => {
  let component: ApiEx;
  let fixture: ComponentFixture<ApiEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
