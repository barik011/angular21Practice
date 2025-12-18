import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApp } from './employee-app';

describe('EmployeeApp', () => {
  let component: EmployeeApp;
  let fixture: ComponentFixture<EmployeeApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
