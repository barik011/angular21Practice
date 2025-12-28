import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReactApp } from './employee-react-app';

describe('EmployeeReactApp', () => {
  let component: EmployeeReactApp;
  let fixture: ComponentFixture<EmployeeReactApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeReactApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReactApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
